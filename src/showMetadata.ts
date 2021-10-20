import { subtitleString } from './subtitle-files/BPMtoSubs1'
import { CharlieSubs } from './subtitle-files/Charlie'
import { SharkieSubs } from './subtitle-files/Sharkie'
import { TurbansSubs } from './subtitle-files/theTurbansBPM'
export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [
  CharlieSubs,
  SharkieSubs,
  TurbansSubs,
  subtitleString,
  subtitleString,
  subtitleString,
  subtitleString,
]

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
