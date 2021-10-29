import { RenuSubs } from './subtitle-files/renuSubs'
import { TurbansSubs } from './subtitle-files/theTurbansBPM'
import { MorskiSubs } from './subtitle-files/morskiSubs'

export type showType = {
  id: number
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const shows: showType[] = [
  {
    id: 1,
    artist: 'The Turbans',
    link: `https://player.vimeo.com/external/637254926.m3u8?s=f83d3e2cb524af1fab23b44bed2a1d57efe2963b`,
    subs: TurbansSubs,
    startTime: 1635521574,
    length: 30, // 53 * 60 + 34,
  },
  {
    id: 2,
    artist: 'Renu',
    link: `https://player.vimeo.com/external/638267370.m3u8?s=7e79c35c5c55c43ad645b22b7c021fa298c942e3`,
    subs: RenuSubs,
    startTime: 1635521574 + 100,
    length: 30, //78 * 60 + 8,
  },
  {
    id: 3,
    artist: 'Morski',
    link: 'https://player.vimeo.com/external/622135752.m3u8?s=594ae8b019bad5b42ab62b0008bcea90a2335c58',
    subs: MorskiSubs,
    startTime: 1635521574 + 200,
    length: 91 * 60 + 23,
  },
]

// Video to display as background while no show is playing
export const DEFAULT_VIDEO =
  'https://player.vimeo.com/external/637531989.m3u8?s=0a75c635933b3588464fcbee094839bf08f9c252'
//'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'

// TIP
// use this website to obtain the unix time
// https://www.epochconverter.com/

// Test the whole run of the show by setting the duration of each to something short like 30 seconds
// Then set the starting times appart by something like 100 seconds
