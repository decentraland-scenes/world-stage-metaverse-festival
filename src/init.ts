import { TagComponent } from "./imports/index"
import { SignPanel,SignBook } from "./signBook"
import { getUserData } from '@decentraland/Identity'
import { getUserAccount } from '@decentraland/EthereumController'
import { getHUD } from "./hud"



//   Load Sign Panel
function loadSignPanel(address:string, name:string) {
  var signPanelsArray: SignPanel[] = []
  for (const entityId in engine.getEntitiesWithComponent(TagComponent)) {
    let entity: IEntity = engine.getEntitiesWithComponent(TagComponent)[entityId]
    if (entity.getComponent(TagComponent).tag=="Signpanel") {
      let panelInfo = {
        board: null, next: null, back: null, pages: null
      }
      for (const childid in entity.children) {
        let child = entity.children[childid]
        if (child.hasComponent(TagComponent)) {
          if (child.getComponent(TagComponent).tag=="Signpanel_Board") {
            panelInfo.board = child
          }
          else if (child.getComponent(TagComponent).tag=="Signpanel_Next") {
            panelInfo.next = child
          }
          else if (child.getComponent(TagComponent).tag=="Signpanel_Back") {
            panelInfo.back = child
          }
          else if (child.getComponent(TagComponent).tag=="Signpanel_Pages") {
            panelInfo.pages = child
          }
        }
      }
      if (panelInfo.board && panelInfo.next && panelInfo.back && panelInfo.pages) {
        var pannel = new SignPanel(entity, panelInfo.board, panelInfo.next, panelInfo.back, panelInfo.pages)
        entity.addComponent(pannel)
        signPanelsArray.push(pannel)
      }
    }
  }
  for (const entityId in engine.getEntitiesWithComponent(TagComponent)) {
    let entity: IEntity = engine.getEntitiesWithComponent(TagComponent)[entityId]
    if (entity.getComponent(TagComponent).tag=="Signpanel_Sign") {
        entity.addComponent(new SignBook(entity, address, name, signPanelsArray))
    }
  }
}


var StreamPlane = new Entity("StreamPlane")
engine.addEntity(StreamPlane)
StreamPlane.addComponent(new Transform({ position: new Vector3(7.94, 13.04, 31.58144) }))
StreamPlane.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
StreamPlane.getComponent(Transform).scale.set(19.2, 10.8, 1)
StreamPlane.addComponent(new PlaneShape())
StreamPlane.getComponent(PlaneShape).withCollisions = true

const Stream1 = new VideoClip("assets/Clouds_World.mp4")
const Stream1Texture = new VideoTexture(Stream1)
const StreamMat = new Material()
StreamMat.albedoTexture = Stream1Texture
StreamMat.emissiveTexture = Stream1Texture
StreamMat.emissiveIntensity = 2
StreamMat.emissiveColor =  new Color3 (0.5,0.5,0.5)
StreamMat.roughness = 0
StreamPlane.addComponent(StreamMat)
Stream1Texture.playing = true
Stream1Texture.loop = true
Stream1Texture.volume = 0



function loadUser() {
  //Load user name/id
  executeTask(async () => {
    try {
      const userData = await getUserData()
      const address = await getUserAccount()
      loadSignPanel(address, userData.displayName)
    } catch (error) {
      log(error.toString())
    }
  })
}


export const loadInit = function(){
  //loadUser()
}
loadInit()
