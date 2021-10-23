import { Poap } from './imports/index'

var entity16006 = new Entity('Main Camera')
engine.addEntity(entity16006)
entity16006.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity16006.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16006.getComponent(Transform).scale.set(1, 1, 1)

var entity15670 = new Entity('Directional Light')
engine.addEntity(entity15670)
entity15670.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity15670
  .getComponent(Transform)
  .rotation.set(0.4082179, -0.2345697, 0.1093816, 0.8754261)
entity15670.getComponent(Transform).scale.set(1, 1, 1)

var entity15444 = new Entity('COG')
engine.addEntity(entity15444)
entity15444.addComponent(
  new Transform({ position: new Vector3(30.2, -0.09, 31.981) })
)
entity15444.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15444.getComponent(Transform).scale.set(0.92614, 1, 0.9562815)

var entity15724 = new Entity('flamingoV1_Art')
entity15724.setParent(entity15444)
entity15724.addComponent(
  new Transform({ position: new Vector3(28.53, 0.85, -20.46) })
)
entity15724.getComponent(Transform).rotation.set(0, 0.3335746, 0, 0.9427237)
entity15724.getComponent(Transform).scale.set(1, 1, 1)
entity15724.addComponent(new GLTFShape('unity_assets/entity15724.gltf'))
entity15724.getComponent(GLTFShape).withCollisions = false
entity15724.getComponent(Transform).rotation.set(0, 0.9427237, 0, -0.3335747)
var entity16372 = new Entity('flamingoV2_Art')
entity16372.setParent(entity15444)
entity16372.addComponent(
  new Transform({ position: new Vector3(30.11, 1.34, 19.03) })
)
entity16372.getComponent(Transform).rotation.set(0, 0.9499435, 0, 0.3124217)
entity16372.getComponent(Transform).scale.set(0.5938382, 0.5938381, 0.5938382)
entity16372.addComponent(new GLTFShape('unity_assets/entity16372.gltf'))
entity16372.getComponent(GLTFShape).withCollisions = false
entity16372.getComponent(Transform).rotation.set(0, 0.3124217, 0, -0.9499435)
var entity16184 = new Entity('Building_Art')
entity16184.setParent(entity15444)
entity16184.addComponent(
  new Transform({ position: new Vector3(-5.688088e-7, 2.505678e-8, 0) })
)
entity16184.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16184.getComponent(Transform).scale.set(1, 1, 1)
entity16184.addComponent(new GLTFShape('unity_assets/entity16184.gltf'))
entity16184.getComponent(GLTFShape).withCollisions = false
entity16184.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15566 = new Entity('Entrance_Art')
entity15566.setParent(entity15444)
entity15566.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15566.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15566.getComponent(Transform).scale.set(1, 1, 1)
entity15566.addComponent(new GLTFShape('unity_assets/entity15566.gltf'))
entity15566.getComponent(GLTFShape).withCollisions = false
entity15566.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity16280 = new Entity('flamingoV3_Art')
entity16280.setParent(entity15444)
entity16280.addComponent(
  new Transform({ position: new Vector3(30.47, 1.23, -26.05) })
)
entity16280.getComponent(Transform).rotation.set(0, 0.879474, 0, 0.4759469)
entity16280.getComponent(Transform).scale.set(1.193, 1.193, 1.193)
entity16280.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity16280.getComponent(GLTFShape).withCollisions = false
entity16280.getComponent(Transform).rotation.set(0, 0.4759469, 0, -0.879474)
var entity15960 = new Entity('flamingoV3_Art (1)')
entity15960.setParent(entity15444)
entity15960.addComponent(
  new Transform({ position: new Vector3(24.48336, 1.29, -25.37756) })
)
entity15960.getComponent(Transform).rotation.set(0, 0.8316047, 0, 0.555368)
entity15960.getComponent(Transform).scale.set(0.768313, 0.7683131, 0.768313)
entity15960.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity15960.getComponent(GLTFShape).withCollisions = false
entity15960.getComponent(Transform).rotation.set(0, 0.5553679, 0, -0.8316047)
var entity16464 = new Entity('flamingoV1_Art (1)')
entity16464.setParent(entity15444)
entity16464.addComponent(
  new Transform({ position: new Vector3(24.67, 0, 22.66) })
)
entity16464.getComponent(Transform).rotation.set(0, 0.9212821, 0, 0.388895)
entity16464.getComponent(Transform).scale.set(0.92, 0.92, 0.92)
entity16464.addComponent(new GLTFShape('unity_assets/entity15724.gltf'))
entity16464.getComponent(GLTFShape).withCollisions = false
entity16464.getComponent(Transform).rotation.set(0, 0.388895, 0, -0.9212821)
var entity15318 = new Entity('flamingoV3_Art (2)')
entity15318.setParent(entity15444)
entity15318.addComponent(
  new Transform({ position: new Vector3(30.7, 1.25, 23.31) })
)
entity15318.getComponent(Transform).rotation.set(0, 0.8076288, 0, 0.5896912)
entity15318.getComponent(Transform).scale.set(1.2073, 1.2073, 1.2073)
entity15318.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity15318.getComponent(GLTFShape).withCollisions = false
entity15318.getComponent(Transform).rotation.set(0, 0.5896911, 0, -0.8076288)
var entity15226 = new Entity('flamingoV3_Art (3)')
entity15226.setParent(entity15444)
entity15226.addComponent(
  new Transform({ position: new Vector3(-19.22, 3.91, -13.77) })
)
entity15226.getComponent(Transform).rotation.set(0, 0.4081843, 0, 0.9128996)
entity15226.getComponent(Transform).scale.set(0.9910812, 0.9910814, 0.9910812)
entity15226.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity15226.getComponent(GLTFShape).withCollisions = false
entity15226.getComponent(Transform).rotation.set(0, 0.9128996, 0, -0.4081844)
var entity15634 = new Entity('Altars_Art')
entity15634.setParent(entity15444)
entity15634.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15634.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15634.getComponent(Transform).scale.set(1, 1, 1)
entity15634.addComponent(new GLTFShape('unity_assets/entity15634.gltf'))
entity15634.getComponent(GLTFShape).withCollisions = false
entity15634.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15868 = new Entity('flamingoV3_Art (6)')
entity15868.setParent(entity15444)
entity15868.addComponent(
  new Transform({ position: new Vector3(-19.44, 3.83, 13.56) })
)
entity15868.getComponent(Transform).rotation.set(0, 0.8422921, 0, 0.5390214)
entity15868.getComponent(Transform).scale.set(1, 1, 1)
entity15868.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity15868.getComponent(GLTFShape).withCollisions = false
entity15868.getComponent(Transform).rotation.set(0, 0.5390214, 0, -0.8422921)
var entity14908 = new Entity('flamingoV2_Art (1)')
entity14908.setParent(entity15444)
entity14908.addComponent(
  new Transform({ position: new Vector3(-18.05, 3.82, -9.92) })
)
entity14908.getComponent(Transform).rotation.set(0, 0.7776656, 0, 0.6286783)
entity14908.getComponent(Transform).scale.set(0.6745548, 0.6745547, 0.6745548)
entity14908.addComponent(new GLTFShape('unity_assets/entity16372.gltf'))
entity14908.getComponent(GLTFShape).withCollisions = false
entity14908.getComponent(Transform).rotation.set(0, 0.6286782, 0, -0.7776656)
var entity15496 = new Entity('flamingoV2_Art (2)')
entity15496.setParent(entity15444)
entity15496.addComponent(
  new Transform({ position: new Vector3(-18.76, 3.82, 10.99) })
)
entity15496.getComponent(Transform).rotation.set(0, 0.9319745, 0, 0.362524)
entity15496.getComponent(Transform).scale.set(0.6745545, 0.6745547, 0.6745546)
entity15496.addComponent(new GLTFShape('unity_assets/entity16372.gltf'))
entity15496.getComponent(GLTFShape).withCollisions = false
entity15496.getComponent(Transform).rotation.set(0, 0.362524, 0, -0.9319745)
var entity15782 = new Entity('AnimLightBulb_Art')
entity15782.setParent(entity15444)
entity15782.addComponent(
  new Transform({ position: new Vector3(33.3, -0.04, -9.77) })
)
entity15782
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.9999999, -6.125495e-17, 0.0003692826)
entity15782.getComponent(Transform).scale.set(1, 1, 1)
entity15782.addComponent(new GLTFShape('unity_assets/entity15782.gltf'))
entity15782.getComponent(GLTFShape).withCollisions = false
entity15782
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.0003692389, 6.125494e-17, -0.9999999)
var entity16078 = new Entity('AnimLightBulb_Art (1)')
entity16078.setParent(entity15444)
entity16078.addComponent(
  new Transform({ position: new Vector3(33.3, 0, 9.77) })
)
entity16078
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.9999999, -6.125495e-17, 0.0003692826)
entity16078.getComponent(Transform).scale.set(1, 1, -1)
entity16078.addComponent(new GLTFShape('unity_assets/entity15782.gltf'))
entity16078.getComponent(GLTFShape).withCollisions = false
entity16078
  .getComponent(Transform)
  .rotation.set(6.125495e-17, 0.0003692389, 6.125494e-17, -0.9999999)
var entity16020 = new Entity('PalmBuildingInterior_Art')
entity16020.setParent(entity15444)
entity16020.addComponent(
  new Transform({ position: new Vector3(2.067768, 7.7, 0.3176456) })
)
entity16020.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16020.getComponent(Transform).scale.set(1, 1, 1)
entity16020.addComponent(new GLTFShape('unity_assets/entity16020.gltf'))
entity16020.getComponent(GLTFShape).withCollisions = false
entity16020.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15412 = new Entity('PoapMachine_Art')
entity15412.setParent(entity15444)
entity15412.addComponent(
  new Transform({ position: new Vector3(0.946, 12.26, 43.632) })
)
entity15412.getComponent(Transform).rotation.set(0, 0.5875719, 0, 0.809172)
entity15412.getComponent(Transform).scale.set(1, 1, 1)
entity15412.addComponent(new GLTFShape('unity_assets/entity15412.gltf'))
entity15412.getComponent(GLTFShape).withCollisions = false
entity15412.getComponent(Transform).rotation.set(0, 0.809172, 0, -0.5875719)
entity15412.addComponent(new Poap(entity15412, '11498', false, null))
var entity16228 = new Entity('Palm')
entity16228.setParent(entity15444)
entity16228.addComponent(
  new Transform({ position: new Vector3(1.22, 2.81, -18.55) })
)
entity16228.getComponent(Transform).rotation.set(0, -0.6707054, 0, 0.741724)
entity16228.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity16228.addComponent(new GLTFShape('unity_assets/entity16228.gltf'))
entity16228.getComponent(GLTFShape).withCollisions = false
entity16228.getComponent(Transform).rotation.set(0, 0.741724, 0, 0.6707053)
var entity15816 = new Entity('Palm (1)')
entity15816.setParent(entity15444)
entity15816.addComponent(
  new Transform({ position: new Vector3(0.9599984, 3.12, 23.35) })
)
entity15816.getComponent(Transform).rotation.set(0, 0.7507208, 0, 0.6606197)
entity15816.getComponent(Transform).scale.set(0.42028, 0.3562419, 0.42028)
entity15816.addComponent(new GLTFShape('unity_assets/entity16228.gltf'))
entity15816.getComponent(GLTFShape).withCollisions = false
entity15816.getComponent(Transform).rotation.set(0, 0.6606196, 0, -0.7507208)

var entity15030 = new Entity('flamingoV3_Art (7)')
entity15030.setParent(entity15444)
entity15030.addComponent(
  new Transform({ position: new Vector3(10.04, 1.21, 15.67) })
)
entity15030.getComponent(Transform).rotation.set(0, 0.2886949, 0, -0.9574212)
entity15030.getComponent(Transform).scale.set(0.4322788, 0.4322788, 0.4322788)
entity15030.addComponent(new GLTFShape('unity_assets/entity16280.gltf'))
entity15030.getComponent(GLTFShape).withCollisions = false
entity15030.getComponent(Transform).rotation.set(0, -0.9574212, 0, -0.2886949)
var entity15424 = new Entity('Torch_Art')
entity15424.setParent(entity15444)
entity15424.addComponent(
  new Transform({ position: new Vector3(1.07, 0.45, 24.68) })
)
entity15424.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15424.getComponent(Transform).scale.set(1.056574, 1.056574, 1.056574)
entity15424.addComponent(new GLTFShape('unity_assets/entity15424.gltf'))
entity15424.getComponent(GLTFShape).withCollisions = false
entity15424.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15370 = new Entity('Torch_Art (1)')
entity15370.setParent(entity15444)
entity15370.addComponent(
  new Transform({ position: new Vector3(10.42, 1.0766, 18.84) })
)
entity15370.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15370.getComponent(Transform).scale.set(1.127144, 1.35537, 1.127144)
entity15370.addComponent(new GLTFShape('unity_assets/entity15424.gltf'))
entity15370.getComponent(GLTFShape).withCollisions = false
entity15370.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15122 = new Entity('flamingoV1_Art (2)')
entity15122.setParent(entity15444)
entity15122.addComponent(
  new Transform({ position: new Vector3(9.676878, 1.1713, 17.62519) })
)
entity15122.getComponent(Transform).rotation.set(0, 0.9867461, 0, -0.1622722)
entity15122.getComponent(Transform).scale.set(0.5234554, 0.5234554, 0.5234554)
entity15122.addComponent(new GLTFShape('unity_assets/entity15724.gltf'))
entity15122.getComponent(GLTFShape).withCollisions = false
entity15122.getComponent(Transform).rotation.set(0, -0.1622723, 0, -0.9867461)
var entity15174 = new Entity('Palm (2)')
entity15174.setParent(entity15444)
entity15174.addComponent(
  new Transform({ position: new Vector3(0.81, 2.81, -25.13) })
)
entity15174.getComponent(Transform).rotation.set(0, -0.9235147, 0, 0.3835631)
entity15174.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity15174.addComponent(new GLTFShape('unity_assets/entity16228.gltf'))
entity15174.getComponent(GLTFShape).withCollisions = false
entity15174.getComponent(Transform).rotation.set(0, 0.3835631, 0, 0.9235147)

var entity16100 = new Entity('Torch_Art (2)')
entity16100.setParent(entity15444)
entity16100.addComponent(
  new Transform({ position: new Vector3(3.5, -0.68, -18.14) })
)
entity16100.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16100.getComponent(Transform).scale.set(1.128618, 1.128618, 1.128618)
entity16100.addComponent(new GLTFShape('unity_assets/entity15424.gltf'))
entity16100.getComponent(GLTFShape).withCollisions = false
entity16100.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
var entity15804 = new Entity('Torch_Art (3)')
entity15804.setParent(entity15444)
entity15804.addComponent(
  new Transform({ position: new Vector3(4.6, -0.68, -23.85) })
)
entity15804.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15804.getComponent(Transform).scale.set(1.213954, 1.213954, 1.213954)
entity15804.addComponent(new GLTFShape('unity_assets/entity15424.gltf'))
entity15804.getComponent(GLTFShape).withCollisions = false
entity15804.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)

var entity16576 = new Entity('AnimEarth')
entity16576.setParent(entity15444)
entity16576.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity16576.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16576.getComponent(Transform).scale.set(0.01, 0.01, 0.01)
entity16576.addComponent(new GLTFShape('unity_assets/entity16576.gltf'))
entity16576.getComponent(GLTFShape).withCollisions = false
entity16576.getComponent(Transform).rotation.set(0, 1, 0, -4.371139e-8)
