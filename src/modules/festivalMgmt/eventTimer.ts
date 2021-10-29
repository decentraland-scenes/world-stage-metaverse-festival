import * as utils from '@dcl/ecs-scene-utils'
import { shows, showType } from 'src/showMetadata'
import {
  currentlyPlaying,
  playDefaultVideo,
  startShow,
  stopShow,
} from './showTrigger'

let PING_INTERVAL = 5000

//function to call the API
export async function checkTime() {
  let url = 'https://worldtimeapi.org/api/timezone/etc/gmt'

  if (playerFar) return
  try {
    let response = await fetch(url)
    let json = await response.json()
    let unixTime = json.unixtime
    log(unixTime)

    let showPlaying: showType
    let artistId: number = 0
    for (let show of shows) {
      if (
        show.startTime < unixTime &&
        show.startTime + show.length > unixTime
      ) {
        showPlaying = show
      }
      artistId += 1
    }

    if (showPlaying) {
      if (!currentlyPlaying === null && currentlyPlaying === showPlaying.id)
        return

      log(
        'playing show ',
        showPlaying.artist,
        ' id:',
        showPlaying.id,
        ' was previously playing : ',
        currentlyPlaying
      )
      startShow(showPlaying)
    } else {
      log('No show playing now')
      playDefaultVideo(shows)
    }
  } catch (e) {
    log('error getting time data ', e)
  }
}

// check time server regularly
let serverInterval = new Entity()
engine.addEntity(serverInterval)
serverInterval.addComponent(
  new utils.Interval(PING_INTERVAL, () => {
    checkTime()
  })
)

// Turn streaming off when player is out of scene

export let playerFar: boolean = true

let showTrigger = new Entity()
showTrigger.addComponent(
  new Transform({
    position: new Vector3(32, 0, 32),
  })
)
engine.addEntity(showTrigger)

showTrigger.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(new Vector3(78, 78, 78)),
    {
      onCameraEnter: () => {
        playerFar = false
        checkTime()
      },
      onCameraExit: () => {
        playerFar = true

        stopShow()
      },
    }
  )
)
