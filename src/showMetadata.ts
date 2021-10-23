import { subtitleString } from './subtitle-files/BPMtoSubs1'
import { NancyeSubs } from './subtitle-files/Nancy'
import { RenuSubs } from './subtitle-files/renuSubs'
import { TurbansSubs } from './subtitle-files/theTurbansBPM'
import { MorskySubs } from './subtitle-files/morskySubs'
import { VirtuSubs } from './subtitle-files/virtuSubs'

export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [RenuSubs, MorskySubs, VirtuSubs, subtitleString]

export const shows: any = {
  deadmau5: {
    link: `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`,
    subs: subtitleString,
    startTime: 1633650252,
    length: 47,
  },
  nadia: { url: 'peer-ec1.decentraland.org' },
  test: {
    link: 'videos/OliverResumeBPMTest.mp4',
    subs: TurbansSubs,
    startTime: 1633650252,
    length: 15,
  },
}
