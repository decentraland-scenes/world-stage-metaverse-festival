import { Synced } from '../syncable'

var base = new Entity('COG')
engine.addEntity(base)
base.addComponent(new Transform({ position: new Vector3(30.2, -0.09, 31.981) }))
base.getComponent(Transform).rotation.set(0, 0, 0, 1)
base.getComponent(Transform).scale.set(0.92614, 1, 0.9562815)

export let SecondaryStage = new Synced(
  new GLTFShape('assets/glb_assets/SecondaryStage.glb'),
  false,
  { position: new Vector3(0, 0, 0), rotation: new Quaternion(0, 1, 0, 0) }
)
SecondaryStage.setParent(base)

export let PlatesStage = new Synced(
  new GLTFShape('assets/glb_assets/PlatesStage.glb'),
  false,
  { position: new Vector3(0, -1.41, 0), rotation: new Quaternion(0, 1, 0, 0) }
)
PlatesStage.setParent(base)

export let SpotLights = new Synced(
  new GLTFShape('assets/glb_assets/SpotLights.glb'),
  true,
  { position: new Vector3(0, 0, 0), rotation: new Quaternion(0, 1, 0, 0) }
)
SpotLights.setParent(base)

export let fireWork1 = new Synced(
  new GLTFShape('assets/glb_assets/FireWork.glb'),
  true,
  {
    position: new Vector3(-20.41, 19.57, 17.45),
    rotation: new Quaternion(-0.1726969, -0.9794129, -0.1029404, 0.01815116),
    scale: new Vector3(1.07975, 1.001554, 1.044023),
  }
)
fireWork1.setParent(base)

export let fireWork2 = new Synced(
  new GLTFShape('assets/glb_assets/FireWork.glb'),
  true,
  {
    position: new Vector3(-20.41, 19.57, -18.15),
    rotation: new Quaternion(-0.1726969, -0.9794129, 0.1029404, -0.01815117),
    scale: new Vector3(1.07975, 1.001554, 1.044023),
  }
)
fireWork2.setParent(base)

export let fireWork3 = new Synced(
  new GLTFShape('assets/glb_assets/FireWork.glb'),
  true,
  {
    position: new Vector3(-17.831, 6.18, 7.31061),
    rotation: new Quaternion(0, -0.9955125, -0.09462963, 0),
    scale: new Vector3(1.07975, 1.001554, 1.044023),
  }
)
fireWork3.setParent(base)

export let fireWork4 = new Synced(
  new GLTFShape('assets/glb_assets/FireWork.glb'),
  true,
  {
    position: new Vector3(-17.831, 6.18, 7.31061),
    rotation: new Quaternion(0, -0.9955125, 0.09462963, 0),
    scale: new Vector3(1.07975, 1.001554, 1.044023),
  }
)
fireWork4.setParent(base)
