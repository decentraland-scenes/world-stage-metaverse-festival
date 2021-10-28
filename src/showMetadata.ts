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

export const shows: showType[] = [
  {
    artist: 'The Turbans',
    link: `https://player.vimeo.com/external/637254926.m3u8?s=f83d3e2cb524af1fab23b44bed2a1d57efe2963b`,
    subs: TurbansSubs,
    startTime: 1635439030,
    length: 53 * 60 + 34,
  },
  {
    artist: 'Test',
    link: 'videos/OliverResumeBPMTest.mp4',
    subs: TurbansSubs,
    startTime: 1633650252,
    length: 15,
  },
]

// TIP
// use this website to obtain the unix time
// https://www.epochconverter.com/
