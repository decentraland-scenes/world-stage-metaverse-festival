import { DEFAULT_VIDEO, showType } from 'src/showMetadata'
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

export let PLAYING_DEFAULT: boolean = false

export let currentlyPlaying: number | null

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

export function startShow(showData: showType) {
  if (currentlyPlaying && currentlyPlaying === showData.id) return

  currentlyPlaying = showData.id

  let currentTime = Date.now() / 1000

  let startTime = showData.startTime
  let timeDiff = currentTime - startTime

  log(
    'show started for ',
    showData.id,
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
  } else {
    log('starting show, ', timeDiff, ' seconds late')

    playVideo(showData, timeDiff)
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

  currentlyPlaying = null

  PLAYING_DEFAULT = false
  hideArtistName()
}

export function playVideo(showData: showType, offsetSeconds: number) {
  log('Starting show ', showData)

  stopShow()

  currentlyPlaying = showData.id

  const myVideoClip = new VideoClip(showData.link)
  const myVideoTexture = new VideoTexture(myVideoClip)

  hideBoard()

  // main video
  videoMat.texture = myVideoTexture

  myVideoTexture.seekTime(offsetSeconds)
  myVideoTexture.playing = true

  myVideoSystem = new CustomVideoSystem(myVideoTexture)
  engine.addSystem(myVideoSystem)

  mySubtitleSystem = new CustomSubtitleSystem(showData.subs)
  mySubtitleSystem.setOffset(offsetSeconds * 1000)
  engine.addSystem(mySubtitleSystem)

  let artistSignAnimation = 'artist' + (showData.id + 1)

  log('ARTIST NAME', artistSignAnimation)

  runAction(artistSignAnimation)
  setArtistName(showData.artist)
}

export function playDefaultVideo(runOfShow?: showType[]) {
  if (PLAYING_DEFAULT) {
    return
  }

  stopShow()
  PLAYING_DEFAULT = true
  currentlyPlaying = null

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
