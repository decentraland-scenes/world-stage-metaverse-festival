import { showType } from 'src/showMetadata'
import { runAction } from '../festivalMgmt/manageShow'
import { NodeCue, SubtitleSystem } from '../subtitle/SubtitleSystem'
import { VideoSystem } from '../festivalMgmt/VideoSystem'
import * as utils from '@dcl/ecs-scene-utils'
import {
  hideArtistName,
  hideBoard,
  setArtistName,
  startNextShowCounter,
} from './nextShowCounter'

import { videoMat } from '../videoScreens'

const DEFAULT_VIDEO =
  'https://player.vimeo.com/external/637531989.m3u8?s=0a75c635933b3588464fcbee094839bf08f9c252'
//   'https://player.vimeo.com/external/637033978.m3u8?s=7e6e280df61ad3555a0d1602e848645d7c1c9886'
//'https://player.vimeo.com/external/637034879.m3u8?s=f2942a5495877f44fd6f30e7f82479efa5f33b37'
//'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'

let PLAYING_DEFAULT: boolean = false

let currentlyPlaying: number | null

export class CustomSubtitleSystem extends SubtitleSystem {
  constructor(text: string) {
    super()
    this.setSubtitlesString(text)
  }

  onCueBegin(cue: NodeCue) {
    log(`Show subtitle '${cue.data.text} at time: ${cue.data.start}`)
    runAction(cue.data.text)
    //debugShowTime(cue.data.start)
  }

  onCueEnd(cue: NodeCue) {
    // log(`Hide subtitle '${cue.data.text}`)
  }
}

export class CustomVideoSystem extends VideoSystem {
  constructor(_videoTexture: VideoTexture) {
    super(_videoTexture)
  }

  onChangeStatus(oldStatus: VideoStatus, newStatus: VideoStatus) {
    if (newStatus == VideoStatus.PLAYING) {
      log(
        `VideoTexture ${this.videoTexture.videoClipId} is now playing! Offset ${this.estimatedOffset}`
      )
      if (mySubtitleSystem) {
        mySubtitleSystem.resume()
      }

      //   mySubtitleSystem.setOffset(this.estimatedOffset)
    } else {
      log(
        `VideoTexture ${this.videoTexture.videoClipId} changed status to '${newStatus}'`
      )
      if (mySubtitleSystem) {
        mySubtitleSystem.pause()
      }
    }
  }

  onOffsetUpdate(estimatedOffset: number) {
    // log('offset changed ', estimatedOffset)
    // mySubtitleSystem.setOffset(estimatedOffset)
  }
}

// instance systems

export let myVideoSystem: CustomVideoSystem

export let mySubtitleSystem: CustomSubtitleSystem

//// key functions

export function startShow(showData: showType, artistId: number) {
  if (currentlyPlaying && currentlyPlaying == artistId) return
  currentlyPlaying = artistId

  let currentTime = Date.now() / 1000

  let startTime = showData.startTime
  let timeDiff = currentTime - startTime

  log(
    'show started for ',
    artistId,
    ' ',
    timeDiff,
    ' seconds ago, show playing: ',
    showData
  )

  log(
    'CURRENT TIME: ',
    currentTime,
    ' SHOW START: ',
    showData.startTime,
    ' DIFF: ',
    timeDiff
  )

  // TODO: change sign with artist name

  if (timeDiff >= showData.length * 60) {
    log('show ended')
    return
  } else if (startTime > currentTime) {
    utils.setTimeout((startTime - currentTime) * 1000, () => {
      playVideo(showData, artistId, 0)
    })
    log('show will start in ', startTime - currentTime)
  } else {
    log('starting show, ', timeDiff, ' seconds late')

    playVideo(showData, artistId, timeDiff)
  }
}

export function stopShow() {
  if (videoMat.texture) {
    let currentVideoTexuture = videoMat.texture as VideoTexture
    currentVideoTexuture.playing = false
  }

  if (myVideoSystem) {
    engine.removeSystem(myVideoSystem)
  }

  if (mySubtitleSystem) {
    runAction('STOPALL')
    engine.removeSystem(mySubtitleSystem)
  }

  PLAYING_DEFAULT = false
  hideArtistName()
}

export function playVideo(
  show: showType,
  artistId: number,
  offsetSeconds: number
) {
  log('Starting show ', show)

  stopShow()

  const myVideoClip = new VideoClip(show.link)
  const myVideoTexture = new VideoTexture(myVideoClip)

  hideBoard()

  // main video
  videoMat.texture = myVideoTexture

  myVideoTexture.seekTime(offsetSeconds)
  myVideoTexture.playing = true

  myVideoSystem = new CustomVideoSystem(myVideoTexture)
  engine.addSystem(myVideoSystem)

  mySubtitleSystem = new CustomSubtitleSystem(show.subs)
  mySubtitleSystem.setOffset(offsetSeconds * 1000)
  engine.addSystem(mySubtitleSystem)

  let artistSignAnimation = 'artist' + (artistId + 1)

  log('ARTIST NAME', artistSignAnimation)

  runAction(artistSignAnimation)
  setArtistName(show.artist)
}

export function playDefaultVideo(runOfShow?: showType[]) {
  if (PLAYING_DEFAULT) {
    return
  }

  stopShow()
  PLAYING_DEFAULT = true

  const myVideoClip = new VideoClip(DEFAULT_VIDEO)
  const myVideoTexture = new VideoTexture(myVideoClip)

  // main video
  videoMat.texture = myVideoTexture
  myVideoTexture.loop = true
  myVideoTexture.playing = true

  runAction('artist0')

  if (runOfShow) {
    startNextShowCounter(runOfShow)
  }
}

///// DEBUG  REMOVE!!!

//startShow(shows['test'])

// /////// REMOVE ////////
// // DEBUG PANEL  (to remove!)
// let canvas = new UICanvas()
// let debugTimeMarker = new UIText(canvas)
// debugTimeMarker.positionX = 400
// debugTimeMarker.color = Color4.Red()

// function debugShowTime(time: number) {
//   let ms = time % 1000
//   let seconds = Math.floor(time / 1000) % 60
//   let minutes = Math.floor(time / (60 * 1000))
//   let hours = Math.floor(minutes / 60)

//   debugTimeMarker.value =
//     'last change at: ' + hours + ':' + minutes + ':' + seconds + '.' + ms
// }
