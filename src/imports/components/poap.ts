import { getUserData, UserData } from "@decentraland/Identity"
//import { getCurrentRealm, Realm } from '@decentraland/EnvironmentAPI'
//import * as EthereumController from '@decentraland/EthereumController'
import * as ui from "@dcl/ui-scene-utils"
import { setTimeout } from "@dcl/ecs-scene-utils"
import { getCurrentRealm } from "@decentraland/EnvironmentAPI"
//import { PlayCloseSound, PlayCoinSound, PlayOpenSound } from './sounds'

export let userData: UserData
///export let playerRealm: Realm

export async function fetchUserData() {
  const data = await getUserData()
  if (data) {
    log(data.displayName)
  }

  return data
}

export async function setUserData() {
  const data = await getUserData()
  if (data) {
    log(data.displayName)
    userData = data
  }
}

// fetch the player's realm
/*export async function setRealm() {
  let realm = await getCurrentRealm()
  if (realm) {
    log(`You are in the realm: ${JSON.stringify(realm.displayName)}`)
    playerRealm = realm
  }
}*/

export async function handlePoap(eventName: string) {
  if (!userData) {
    await setUserData()
  }

  /*if (!playerRealm) {
    await setRealm()
  }*/

  if (userData.hasConnectedWeb3) {
    let poap = await sendpoap(eventName)
    if (poap && poap.status == 200) {
      //PlayCoinSound()
      let p = new ui.OkPrompt(
        "A POAP token for today's event will arrive to your account very soon!",
        () => {
          p.close()
          //PlayCloseSound()
        },
        "Ok",
        true
      )
    } else {
      //PlayOpenSound()
      let text = "Something is wrong with the server, please try again later."
      if (poap && poap.msg) {
        text = poap.msg
      }
      let p = new ui.OkPrompt(
        text,
        () => {
          p.close()
          //PlayCloseSound()
        },
        "Ok",
        true
      )
    }
  } else {
    //PlayOpenSound()
    let p = new ui.OkPrompt(
      "You need an in-browser Ethereum wallet (eg: Metamask) to claim this item.",
      () => {
        p.close()
        //PlayCloseSound()
      },
      "Ok",
      true
    )
  }
}

export async function sendpoap(eventID: string) {
  //if (TESTDATA_ENABLED && IN_PREVIEW) {
  // return
  //}

  if (!userData) {
    await setUserData()
  }

  try {
    const realm = await getCurrentRealm()

    const url = `https://poapapi.dcl.guru/claim/${eventID}`

    let method = "POST"
    let headers = { "Content-Type": "application/json" }
    let body = JSON.stringify({
      address: userData.publicKey,
      catalyst: realm.domain,
      room: realm.layer,
    })

    let response = await fetch(url, {
      headers: headers,
      method: method,
      body: body,
    })
    let data = await response.json()
    log("Poap status: ", data)

    return data
  } catch {
    log("error fetching from token server")
  }
}

export async function hasPoap(eventId: number) {
  if (!userData) {
    await setUserData()
  }

  const url = "https://api.poap.xyz/actions/scan/" + userData.userId

  /*let body = JSON.stringify({
    address: userData.userId,
    catalyst: playerRealm.serverName,
    room: playerRealm.layer,
  })
  console.log(body)*/
  //log('sending req to: ', url)
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      //body: body,
    })
    let data = await response.json()
    for (let index = 0; index < data.length; index++) {
      if (data[index]?.event?.id == eventId) {
        return true
      }
    }
    return false
  } catch (e) {
    console_log(e)
    log("error fetching from token server ", url)
    return false
  }
}

@Component("Poap")
export class Poap {
  entity: Entity
  inCooldown: boolean = false
  constructor(entity: Entity, eventName: string, bSpawnDefaultModel: boolean = true, bannerEntity: Entity = null) {
    this.entity = entity
    if (
      !bSpawnDefaultModel &&
      (entity.hasComponent(GLTFShape) || entity.hasComponent(BoxShape) || entity.hasComponent(SphereShape))
    ) {
      log('okkkkkk')
      entity.addComponent(
        new OnPointerDown(
          (e) => {
            if (!this.inCooldown) {
              this.inCooldown = true
              var self = this
              setTimeout(4000, () => {
                self.inCooldown = false
              })
              handlePoap(eventName)
            }
          },
          {
            hoverText: "Get Attendance Token",
            button: ActionButton.POINTER,
          }
        )
      )
    } else {
      // POAP BOOTH
      let POAPBooth = new Dispenser(
        {
          position: new Vector3(0, 0, 0),
          //rotation: Quaternion.Euler(0, 140, 0)
        },
        eventName
      )

      let POAPCore = new Entity()
      POAPCore.addComponent(new Transform())
      POAPBooth.setParent(POAPCore)
      POAPCore.setParent(entity)
    }

    // POAP BANNER
    if (bannerEntity) {
      let POAPBanner = new Entity()
      POAPBanner.addComponent(new Transform({}))
      POAPBanner.addComponent(new GLTFShape("assets/poap/POAP_Banner.glb"))
      POAPBanner.addComponent(
        new OnPointerDown(
          (e) => {
            openExternalURL("https://app.poap.xyz/")
          },
          { hoverText: "Learn More" }
        )
      )
      POAPBanner.setParent(bannerEntity)
    }
  }
}

export class Dispenser extends Entity {
  idleAnim = new AnimationState("Idle_POAP", { looping: true })
  buyAnim = new AnimationState("Action_POAP", { looping: false })
  buttonAnim = new AnimationState("Button_Action", { looping: false })
  eventName: string
  timeout: any
  inCooldown: boolean = false
  constructor(transform: TransformConstructorArgs, eventName: string) {
    super()
    //engine.addEntity(this)

    this.addComponent(new GLTFShape("assets/poap/POAP_dispenser.glb"))
    this.addComponent(new Transform(transform))

    this.addComponent(new Animator())
    this.getComponent(Animator).addClip(this.idleAnim)
    this.getComponent(Animator).addClip(this.buyAnim)
    this.idleAnim.play()

    this.eventName = eventName

    let button = new Entity()
    button.addComponent(new GLTFShape("assets/poap/POAP_button.glb"))
    button.addComponent(new Animator())
    button.getComponent(Animator).addClip(this.buttonAnim)
    button.setParent(this)
    button.addComponent(
      new OnPointerDown(
        (e) => {
          button.getComponent(Animator).getClip("Action").stop()
          button.getComponent(Animator).getClip("Action").play()
          //sceneMessageBus.emit('activatePoap', {})
          if (!this.inCooldown) {
            this.inCooldown = true
            var self = this
            setTimeout(4000, () => {
              self.inCooldown = false
            })
            handlePoap(eventName)
          }
        },
        {
          hoverText: "Get Attendance Token",
          button: ActionButton.POINTER,
        }
      )
    )
  }

  public activate(): void {
    let anim = this.getComponent(Animator)

    anim.getClip("Idle_POAP").stop()
    anim.getClip("Action_POAP").stop()

    anim.getClip("Action_POAP").play()

    // if (this.timeout) {
    //   clearDelay(this.timeout)
    // }
    // this.timeout = utils.setTimeout(() => {
    //   this.timeout = null
    //   anim.getClip('Action_POAP').stop()
    //   anim.getClip('Idle_POAP').play()
    // }, 4000)
  }
}
