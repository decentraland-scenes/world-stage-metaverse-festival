import { Poap } from './imports/index'
import { createDanceAreas } from './modules/createDanceAreas'

var entity16362 = new Entity('Main Camera')
engine.addEntity(entity16362)
entity16362.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity16362.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16362.getComponent(Transform).scale.set(1, 1, 1)

var entity15646 = new Entity('Directional Light')
engine.addEntity(entity15646)
entity15646.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity15646
  .getComponent(Transform)
  .rotation.set(0.4082179, -0.2345697, 0.1093816, 0.8754261)
entity15646.getComponent(Transform).scale.set(1, 1, 1)

var entity15492 = new Entity('COG')
engine.addEntity(entity15492)
entity15492.addComponent(
  new Transform({ position: new Vector3(30.2, -0.09, 31.981) })
)
entity15492.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15492.getComponent(Transform).scale.set(0.92614, 1, 0.9562815)

var entity15488 = new Entity('AnimSecondaryStage_Art')
entity15488.setParent(entity15492)
entity15488.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15488.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15488.getComponent(Transform).scale.set(1, 1, 1)
entity15488.addComponent(new GLTFShape('unity_assets/entity15488.gltf'))
entity15488.getComponent(GLTFShape).withCollisions = false
entity15488.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
engine.addEntity(entity15488)

var entity15700 = new Entity('flamingoV1_Art')
entity15700.setParent(entity15492)
entity15700.addComponent(
  new Transform({ position: new Vector3(28.53, 0.85, -20.46) })
)
entity15700.getComponent(Transform).rotation.set(0, 0.3335746, 0, 0.9427237)
entity15700.getComponent(Transform).scale.set(1, 1, 1)
entity15700.addComponent(new GLTFShape('unity_assets/entity15700.gltf'))
entity15700.getComponent(GLTFShape).withCollisions = false
entity15700.getComponent(Transform).rotation.set(0, 0.9427237, 0, -0.3335747)
engine.addEntity(entity15700)

var entity16872 = new Entity('flamingoV2_Art')
entity16872.setParent(entity15492)
entity16872.addComponent(
  new Transform({ position: new Vector3(30.11, 1.34, 19.03) })
)
entity16872.getComponent(Transform).rotation.set(0, 0.9499435, 0, 0.3124217)
entity16872.getComponent(Transform).scale.set(0.5938382, 0.5938381, 0.5938382)
entity16872.addComponent(new GLTFShape('unity_assets/entity16872.gltf'))
entity16872.getComponent(GLTFShape).withCollisions = false
entity16872.getComponent(Transform).rotation.set(0, 0.3124217, 0, -0.9499435)
engine.addEntity(entity16872)

var entity15614 = new Entity('Entrance_Art')
entity15614.setParent(entity15492)
entity15614.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15614.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15614.getComponent(Transform).scale.set(1, 1, 1)
entity15614.addComponent(new GLTFShape('unity_assets/entity15614.gltf'))
entity15614.getComponent(GLTFShape).withCollisions = false
entity15614.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
engine.addEntity(entity15614)

var entity16780 = new Entity('flamingoV3_Art')
entity16780.setParent(entity15492)
entity16780.addComponent(
  new Transform({ position: new Vector3(30.47, 1.23, -26.05) })
)
entity16780.getComponent(Transform).rotation.set(0, 0.879474, 0, 0.4759469)
entity16780.getComponent(Transform).scale.set(1.193, 1.193, 1.193)
entity16780.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity16780.getComponent(GLTFShape).withCollisions = false
entity16780.getComponent(Transform).rotation.set(0, 0.4759469, 0, -0.879474)
var entity15936 = new Entity('flamingoV3_Art (1)')
entity15936.setParent(entity15492)
entity15936.addComponent(
  new Transform({ position: new Vector3(24.48336, 1.29, -25.37756) })
)
entity15936.getComponent(Transform).rotation.set(0, 0.8316047, 0, 0.555368)
entity15936.getComponent(Transform).scale.set(0.768313, 0.7683131, 0.768313)
entity15936.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity15936.getComponent(GLTFShape).withCollisions = false
entity15936.getComponent(Transform).rotation.set(0, 0.5553679, 0, -0.8316047)
var entity16974 = new Entity('flamingoV1_Art (1)')
entity16974.setParent(entity15492)
entity16974.addComponent(
  new Transform({ position: new Vector3(24.67, 0, 22.66) })
)
entity16974.getComponent(Transform).rotation.set(0, 0.9212821, 0, 0.388895)
entity16974.getComponent(Transform).scale.set(0.92, 0.92, 0.92)
entity16974.addComponent(new GLTFShape('unity_assets/entity15700.gltf'))
entity16974.getComponent(GLTFShape).withCollisions = false
entity16974.getComponent(Transform).rotation.set(0, 0.388895, 0, -0.9212821)
var entity15302 = new Entity('flamingoV3_Art (2)')
entity15302.setParent(entity15492)
entity15302.addComponent(
  new Transform({ position: new Vector3(30.7, 1.25, 23.31) })
)
entity15302.getComponent(Transform).rotation.set(0, 0.8076288, 0, 0.5896912)
entity15302.getComponent(Transform).scale.set(1.2073, 1.2073, 1.2073)
entity15302.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity15302.getComponent(GLTFShape).withCollisions = false
entity15302.getComponent(Transform).rotation.set(0, 0.5896911, 0, -0.8076288)
var entity15210 = new Entity('flamingoV3_Art (3)')
entity15210.setParent(entity15492)
entity15210.addComponent(
  new Transform({ position: new Vector3(-19.22, 3.91, -13.77) })
)
entity15210.getComponent(Transform).rotation.set(0, 0.4081843, 0, 0.9128996)
entity15210.getComponent(Transform).scale.set(0.9910812, 0.9910814, 0.9910812)
entity15210.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity15210.getComponent(GLTFShape).withCollisions = false
entity15210.getComponent(Transform).rotation.set(0, 0.9128996, 0, -0.4081844)
var entity15844 = new Entity('flamingoV3_Art (6)')
entity15844.setParent(entity15492)
entity15844.addComponent(
  new Transform({ position: new Vector3(-19.44, 3.83, 13.56) })
)
entity15844.getComponent(Transform).rotation.set(0, 0.8422921, 0, 0.5390214)
entity15844.getComponent(Transform).scale.set(1, 1, 1)
entity15844.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity15844.getComponent(GLTFShape).withCollisions = false
entity15844.getComponent(Transform).rotation.set(0, 0.5390214, 0, -0.8422921)
var entity14908 = new Entity('flamingoV2_Art (1)')
entity14908.setParent(entity15492)
entity14908.addComponent(
  new Transform({ position: new Vector3(-18.05, 3.82, -9.92) })
)
entity14908.getComponent(Transform).rotation.set(0, 0.7776656, 0, 0.6286783)
entity14908.getComponent(Transform).scale.set(0.6745548, 0.6745547, 0.6745548)
entity14908.addComponent(new GLTFShape('unity_assets/entity16872.gltf'))
entity14908.getComponent(GLTFShape).withCollisions = false
entity14908.getComponent(Transform).rotation.set(0, 0.6286782, 0, -0.7776656)
var entity15544 = new Entity('flamingoV2_Art (2)')
entity15544.setParent(entity15492)
entity15544.addComponent(
  new Transform({ position: new Vector3(-18.76, 3.82, 10.99) })
)
entity15544.getComponent(Transform).rotation.set(0, 0.9319745, 0, 0.362524)
entity15544.getComponent(Transform).scale.set(0.6745545, 0.6745547, 0.6745546)
entity15544.addComponent(new GLTFShape('unity_assets/entity16872.gltf'))
entity15544.getComponent(GLTFShape).withCollisions = false
entity15544.getComponent(Transform).rotation.set(0, 0.362524, 0, -0.9319745)
var entity15758 = new Entity('AnimLightBulb_Art')
entity15758.setParent(entity15492)
entity15758.addComponent(
  new Transform({ position: new Vector3(33.3, -0.04, -9.77) })
)
entity15758
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.9999999, -6.125495e-17, 0.0003692826)
entity15758.getComponent(Transform).scale.set(1, 1, 1)
entity15758.addComponent(new GLTFShape('unity_assets/entity15758.gltf'))
entity15758.getComponent(GLTFShape).withCollisions = false
entity15758
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.0003692389, 6.125494e-17, -0.9999999)
var entity16692 = new Entity('AnimLightBulb_Art (1)')
entity16692.setParent(entity15492)
entity16692.addComponent(
  new Transform({ position: new Vector3(33.3, 0, 9.77) })
)
entity16692
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.9999999, -6.125495e-17, 0.0003692826)
entity16692.getComponent(Transform).scale.set(1, 1, -1)
entity16692.addComponent(new GLTFShape('unity_assets/entity15758.gltf'))
entity16692.getComponent(GLTFShape).withCollisions = false
entity16692
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.0003692389, 6.125494e-17, -0.9999999)
var entity16656 = new Entity('PalmBuildingInterior_Art')
entity16656.setParent(entity15492)
entity16656.addComponent(
  new Transform({ position: new Vector3(2.067768, 7.7, 0.3176456) })
)
entity16656.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16656.getComponent(Transform).scale.set(1, 1, 1)
entity16656.addComponent(new GLTFShape('unity_assets/entity16656.gltf'))
entity16656.getComponent(GLTFShape).withCollisions = false
entity16656.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16574 = new Entity('PlatesStage_Art')
entity16574.setParent(entity15492)
entity16574.addComponent(
  new Transform({ position: new Vector3(-10.38203, 16.98582, 0.1634143) })
)
entity16574.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16574.getComponent(Transform).scale.set(1, 1, 1)
entity16574.addComponent(new GLTFShape('unity_assets/entity16574.gltf'))
entity16574.getComponent(GLTFShape).withCollisions = false
entity16574.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15392 = new Entity('PoapMachine_Art')
entity15392.setParent(entity15492)
entity15392.addComponent(
  new Transform({ position: new Vector3(0.946, 12.26, 43.632) })
)
entity15392.getComponent(Transform).rotation.set(0, 0.5875719, 0, 0.809172)
entity15392.getComponent(Transform).scale.set(1, 1, 1)
entity15392.addComponent(new GLTFShape('unity_assets/entity15392.gltf'))
entity15392.getComponent(GLTFShape).withCollisions = false
entity15392.getComponent(Transform).rotation.set(0, 0.809172, 0, -0.5875719)
entity15392.addComponent(
  new Poap(entity15392, 'MusicFestival2021', false, null)
)
var entity3030n = new Entity('AnimEarth')
entity3030n.setParent(entity15492)
entity3030n.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity3030n.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity3030n.getComponent(Transform).scale.set(0.01, 0.01, 0.01)
entity3030n.addComponent(new GLTFShape('unity_assets/entity3030n.gltf'))
entity3030n.getComponent(GLTFShape).withCollisions = false
entity3030n.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16728 = new Entity('Palm')
entity16728.setParent(entity15492)
entity16728.addComponent(
  new Transform({ position: new Vector3(1.22, 2.81, -18.55) })
)
entity16728.getComponent(Transform).rotation.set(0, -0.6707054, 0, 0.741724)
entity16728.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity16728.addComponent(new GLTFShape('unity_assets/entity16728.gltf'))
entity16728.getComponent(GLTFShape).withCollisions = false
entity16728.getComponent(Transform).rotation.set(0, 0.741724, 0, 0.6707053)
var entity15792 = new Entity('Palm (1)')
entity15792.setParent(entity15492)
entity15792.addComponent(
  new Transform({ position: new Vector3(3.54, 3.39, 23.35) })
)
entity15792.getComponent(Transform).rotation.set(0, 0.7507208, 0, 0.6606197)
entity15792.getComponent(Transform).scale.set(0.42028, 0.3562419, 0.42028)
entity15792.addComponent(new GLTFShape('unity_assets/entity16728.gltf'))
entity15792.getComponent(GLTFShape).withCollisions = false
entity15792.getComponent(Transform).rotation.set(0, 0.6606196, 0, -0.7507208)
var entity15014 = new Entity('flamingoV3_Art (7)')
entity15014.setParent(entity15492)
entity15014.addComponent(
  new Transform({ position: new Vector3(9.108487, 1.21, 18.20792) })
)
entity15014.getComponent(Transform).rotation.set(0, 0.2886949, 0, -0.9574212)
entity15014.getComponent(Transform).scale.set(0.4322788, 0.4322788, 0.4322788)
entity15014.addComponent(new GLTFShape('unity_assets/entity16780.gltf'))
entity15014.getComponent(GLTFShape).withCollisions = false
entity15014.getComponent(Transform).rotation.set(0, -0.9574212, 0, -0.2886949)
var entity15404 = new Entity('Torch_Art')
entity15404.setParent(entity15492)
entity15404.addComponent(
  new Transform({ position: new Vector3(3.65, 0.72, 24.68) })
)
entity15404.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15404.getComponent(Transform).scale.set(1.056574, 1.056574, 1.056574)
entity15404.addComponent(new GLTFShape('unity_assets/entity15404.gltf'))
entity15404.getComponent(GLTFShape).withCollisions = false
entity15404.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16402 = new Entity('Building_Art')
entity16402.setParent(entity15492)
entity16402.addComponent(
  new Transform({ position: new Vector3(-5.688088e-7, 2.505678e-8, 0) })
)
entity16402.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16402.getComponent(Transform).scale.set(0.01, 0.01, 0.01)
entity16402.addComponent(new GLTFShape('unity_assets/entity16402.gltf'))
entity16402.getComponent(GLTFShape).withCollisions = false
entity16402.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15354 = new Entity('Torch_Art (1)')
entity15354.setParent(entity15492)
entity15354.addComponent(
  new Transform({ position: new Vector3(10.42, 1.0766, 18.84) })
)
entity15354.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15354.getComponent(Transform).scale.set(1.127144, 1.35537, 1.127144)
entity15354.addComponent(new GLTFShape('unity_assets/entity15404.gltf'))
entity15354.getComponent(GLTFShape).withCollisions = false
entity15354.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15106 = new Entity('flamingoV1_Art (2)')
entity15106.setParent(entity15492)
entity15106.addComponent(
  new Transform({ position: new Vector3(8.745363, 1.1713, 20.16311) })
)
entity15106.getComponent(Transform).rotation.set(0, 0.9867461, 0, -0.1622722)
entity15106.getComponent(Transform).scale.set(0.5234554, 0.5234554, 0.5234554)
entity15106.addComponent(new GLTFShape('unity_assets/entity15700.gltf'))
entity15106.getComponent(GLTFShape).withCollisions = false
entity15106.getComponent(Transform).rotation.set(0, -0.1622723, 0, -0.9867461)
var entity15158 = new Entity('Palm (2)')
entity15158.setParent(entity15492)
entity15158.addComponent(
  new Transform({ position: new Vector3(0.81, 2.81, -25.13) })
)
entity15158.getComponent(Transform).rotation.set(0, -0.9235147, 0, 0.3835631)
entity15158.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity15158.addComponent(new GLTFShape('unity_assets/entity16728.gltf'))
entity15158.getComponent(GLTFShape).withCollisions = false
entity15158.getComponent(Transform).rotation.set(0, 0.3835631, 0, 0.9235147)
var entity16172 = new Entity('Spot_LightsANdCLouds_Art')
entity16172.setParent(entity15492)
entity16172.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity16172.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16172.getComponent(Transform).scale.set(1, 1, 1)
entity16172.addComponent(new GLTFShape('unity_assets/entity16172.gltf'))
entity16172.getComponent(GLTFShape).withCollisions = false
entity16172.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16716 = new Entity('Torch_Art (2)')
entity16716.setParent(entity15492)
entity16716.addComponent(
  new Transform({ position: new Vector3(3.5, -0.68, -18.14) })
)
entity16716.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16716.getComponent(Transform).scale.set(1.128618, 1.128618, 1.128618)
entity16716.addComponent(new GLTFShape('unity_assets/entity15404.gltf'))
entity16716.getComponent(GLTFShape).withCollisions = false
entity16716.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15780 = new Entity('Torch_Art (3)')
entity15780.setParent(entity15492)
entity15780.addComponent(
  new Transform({ position: new Vector3(4.6, -0.68, -23.85) })
)
entity15780.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15780.getComponent(Transform).scale.set(1.213954, 1.213954, 1.213954)
entity15780.addComponent(new GLTFShape('unity_assets/entity15404.gltf'))
entity15780.getComponent(GLTFShape).withCollisions = false
entity15780.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16660 = new Entity('fire(30)')
entity16660.setParent(entity15492)
entity16660.addComponent(
  new Transform({ position: new Vector3(-17.831, 6.18, -7.31061) })
)
entity16660.getComponent(Transform).rotation.set(0, -0.9955122, 0.09463346, 0)
entity16660.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity16660.addComponent(new GLTFShape('assets/glb_assets/FireWork.glb'))

var entity14954 = new Entity('fire (31)')
entity14954.setParent(entity15492)
entity14954.addComponent(
  new Transform({ position: new Vector3(-17.831, 6.18, 7.31061) })
)
entity14954.getComponent(Transform).rotation.set(0, -0.9955125, -0.09462963, 0)
entity14954.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity14954.addComponent(new GLTFShape('assets/glb_assets/FireWork.glb'))

var entity17020 = new Entity('fire (32)')
entity17020.setParent(entity15492)
entity17020.addComponent(
  new Transform({ position: new Vector3(-20.41, 19.57, -18.15) })
)
entity17020
  .getComponent(Transform)
  .rotation.set(-0.1726969, -0.9794129, 0.1029404, -0.01815117)
entity17020.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity17020.addComponent(new GLTFShape('assets/glb_assets/FireWork.glb'))

var entity15410 = new Entity('fire (33)')
entity15410.setParent(entity15492)
entity15410.addComponent(
  new Transform({ position: new Vector3(-20.41, 19.57, 17.45) })
)
entity15410
  .getComponent(Transform)
  .rotation.set(-0.1726969, -0.9794129, -0.1029404, 0.01815116)
entity15410.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity15410.addComponent(new GLTFShape('assets/glb_assets/FireWork.glb'))

createDanceAreas()
