import {
  fireWork1,
  fireWork2,
  fireWork3,
  fireWork4,
  PlatesStage,
  SecondaryStage,
  SpotLights,
} from './animatedEntities'

// Default beats per minute of show
export let BPM = 120

export enum STAGE_IDS {
  WORLD,
  EVOLUTION,
}
export const STAGE_ID = STAGE_IDS.WORLD

// NOTE: STOPALL, PAUSEALL and default must always exist

/// Run actions
export function runAction(action: string) {
  switch (action) {
    case 'STOPALL':
      runAction('PAUSEALL')
      if (RandomizerSystem._instance) {
        RandomizerSystem._instance.active = false
      }

      break
    case 'PAUSEALL':
      SecondaryStage.stopAllAnimations()
      PlatesStage.stopAllAnimations()
      SpotLights.stopAllAnimations()
      break

    case 'chill':
      PlatesStage.playAnimation('PlatesStage_Art', false, 0, BPM / 120 / 4)
      SpotLights.playAnimation(
        'Spot_LightsANdCLouds_Art',
        false,
        0,
        BPM / 120 / 4
      )

      break

    case 'up':
      SecondaryStage.playAnimation(
        'AnimSecondaryStage_Art',
        false,
        0,
        BPM / 120
      )
      PlatesStage.playAnimation('PlatesStage_Art', false, 0, BPM / 120)
      SpotLights.playAnimation('Spot_LightsANdCLouds_Art', false, 0, BPM / 120)
      runAction('randomFirework')
      break

    case 'secondary_stage':
      SecondaryStage.playAnimation(
        'AnimSecondaryStage_Art',
        false,
        0,
        BPM / 120
      )
      break
    case 'secondary_stage_pause':
      SecondaryStage.stopAllAnimations()
      break
    case 'roof':
      PlatesStage.playAnimation('PlatesStage_Art', false, 0, BPM / 120)
      break
    case 'roof_pause':
      PlatesStage.stopAllAnimations()
      break

    case 'spotlights':
      SpotLights.playAnimation('Spot_LightsANdCLouds_Art', false, 0, BPM / 120)
      break

    case 'spotlights_pause':
      SpotLights.stopAllAnimations()
      break

    case 'fireWork1':
      fireWork1.playAnimation('AnimFireWork', true)
      break

    case 'fireWork2':
      fireWork2.playAnimation('AnimFireWork', true)
      break

    case 'fireWork3':
      fireWork3.playAnimation('AnimFireWork', true)
      break

    case 'fireWork4':
      fireWork4.playAnimation('AnimFireWork', true)
      break

    case 'fireWorks_All':
      fireWork1.playAnimation('AnimFireWork', true)
      fireWork2.playAnimation('AnimFireWork', true)
      fireWork3.playAnimation('AnimFireWork', true)
      fireWork4.playAnimation('AnimFireWork', true)
      break

    case 'L7':
      break

    case 'randomFirework':
      randomizer([`fireWork1`, `fireWork2`, `fireWork3`, `fireWork4`], 16)
      break

    case 'artist0':
      break

    case 'artist1':
      break

    case 'artist2':
      break

    case 'artist3':
      break

    case 'artist4':
      break

    case 'artist5':
      break

    case 'artist6':
      break

    case 'artist7':
      break

    default:
      // check if starts with BPM
      if (action.substring(0, 3) == 'BPM') {
        // Change BPM
        BPM = parseFloat(action.substring(3))
        if (RandomizerSystem._instance) {
          RandomizerSystem._instance.reset()
        }

        log('SET BPM TO ', BPM)
      }

      break
  }
}

//let currentAnim = 1

// const input = Input.instance

// input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
//   //step to next ID
//   currentAnim += 1

//   log('Playing Anim L' + (currentAnim - 1))

//   runAction('state'.concat(currentAnim.toString()))
// })

//// RANDOMIZER

export function randomizer(animations: string[], beats = 8) {
  RandomizerSystem.createAndAddToEngine()
  RandomizerSystem._instance.events = animations
  RandomizerSystem._instance.start()
}

export class RandomizerSystem implements ISystem {
  static _instance: RandomizerSystem | null = null

  timer: number = 0
  beats: number = 8
  events: string[]
  lastPlayed: number | null = null

  active: boolean = false

  static createAndAddToEngine(): RandomizerSystem {
    if (this._instance == null) {
      this._instance = new RandomizerSystem()
      engine.addSystem(this._instance)
    }
    return this._instance
  }

  private constructor() {
    RandomizerSystem._instance = this
  }

  update(dt: number) {
    if (!this.active) return

    this.timer += dt
    if (this.timer > (BPM / 60) * this.beats) {
      this.timer = 0
      this.playRandomAction()
    }
  }
  start() {
    this.active = true
    this.timer = 0
    this.playRandomAction()
  }
  playRandomAction() {
    let randomIndex = Math.floor(Math.random() * this.events.length)
    // log('New random animation ', randomIndex, this.events[randomIndex])
    if (this.lastPlayed && this.lastPlayed == randomIndex) {
      return
    } else if (this.lastPlayed) {
      runAction('PAUSEALL')
    }
    runAction(this.events[randomIndex])
    this.lastPlayed = randomIndex
  }
  stop() {
    this.active = false
    if (this.lastPlayed) {
      runAction('STOPALL')
    }
  }
  reset() {
    if (this.active) {
      this.timer = 0
      if (this.lastPlayed) {
        // make sure any looping animations go with the new BPM
        runAction(this.events[this.lastPlayed])
      }
    }
  }
}
