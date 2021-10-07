import { Poap } from "./imports/index"
import { TagComponent } from "./imports/index"
import { getHUD } from "./hud"

var entity16502 = new Entity("Main Camera")
entity16502.addComponent(new TagComponent())
entity16502.getComponent(TagComponent).tag = "MainCamera" 
engine.addEntity(entity16502)
entity16502.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity16502.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16502.getComponent(Transform).scale.set(1, 1, 1)

var entity15914 = new Entity("Directional Light")
engine.addEntity(entity15914)
entity15914.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity15914.getComponent(Transform).rotation.set(0.4082179, -0.2345697, 0.1093816, 0.8754261)
entity15914.getComponent(Transform).scale.set(1, 1, 1)

var entity15560 = new Entity("COG")
engine.addEntity(entity15560)
entity15560.addComponent(new Transform({ position: new Vector3(30.2, 0, 31.981) }))
entity15560.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15560.getComponent(Transform).scale.set(0.92614, 1, 0.9562815)

var entity15488 = new Entity("AnimSecondaryStage_Art")
entity15488.setParent(entity15560)
entity15488.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15488.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15488.getComponent(Transform).scale.set(1, 1, 1)
entity15488.addComponent(new GLTFShape("unity_assets/entity15488.gltf"))
entity15488.getComponent(GLTFShape).withCollisions = false
entity15488.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity15968 = new Entity("flamingoV1_Art")
entity15968.setParent(entity15560)
entity15968.addComponent(new Transform({ position: new Vector3(28.53, 0.85, -20.46) }))
entity15968.getComponent(Transform).rotation.set(0, 0.3335746, 0, 0.9427237)
entity15968.getComponent(Transform).scale.set(1, 1, 1)
entity15968.addComponent(new GLTFShape("unity_assets/entity15968.gltf"))
entity15968.getComponent(GLTFShape).withCollisions = false
entity15968.getComponent(Transform).rotation.set(0, 0.9427237, 0, -0.3335747)
var entity17120 = new Entity("flamingoV2_Art")
entity17120.setParent(entity15560)
entity17120.addComponent(new Transform({ position: new Vector3(30.11, 1.34, 19.03) }))
entity17120.getComponent(Transform).rotation.set(0, 0.9499435, 0, 0.3124217)
entity17120.getComponent(Transform).scale.set(0.5938382, 0.5938381, 0.5938382)
entity17120.addComponent(new GLTFShape("unity_assets/entity17120.gltf"))
entity17120.getComponent(GLTFShape).withCollisions = false
entity17120.getComponent(Transform).rotation.set(0, 0.3124217, 0, -0.9499435)
var entity15682 = new Entity("Entrance_Art")
entity15682.setParent(entity15560)
entity15682.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity15682.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15682.getComponent(Transform).scale.set(1, 1, 1)
entity15682.addComponent(new GLTFShape("unity_assets/entity15682.gltf"))
entity15682.getComponent(GLTFShape).withCollisions = false
entity15682.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity17028 = new Entity("flamingoV3_Art")
entity17028.setParent(entity15560)
entity17028.addComponent(new Transform({ position: new Vector3(30.47, 1.23, -26.05) }))
entity17028.getComponent(Transform).rotation.set(0, 0.879474, 0, 0.4759469)
entity17028.getComponent(Transform).scale.set(1.193, 1.193, 1.193)
entity17028.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity17028.getComponent(GLTFShape).withCollisions = false
entity17028.getComponent(Transform).rotation.set(0, 0.4759469, 0, -0.879474)
var entity16204 = new Entity("flamingoV3_Art (1)")
entity16204.setParent(entity15560)
entity16204.addComponent(new Transform({ position: new Vector3(24.48336, 1.29, -25.37756) }))
entity16204.getComponent(Transform).rotation.set(0, 0.8316047, 0, 0.555368)
entity16204.getComponent(Transform).scale.set(0.768313, 0.7683131, 0.768313)
entity16204.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity16204.getComponent(GLTFShape).withCollisions = false
entity16204.getComponent(Transform).rotation.set(0, 0.5553679, 0, -0.8316047)
var entity17262 = new Entity("flamingoV1_Art (1)")
entity17262.setParent(entity15560)
entity17262.addComponent(new Transform({ position: new Vector3(24.67, 0, 22.66) }))
entity17262.getComponent(Transform).rotation.set(0, 0.9212821, 0, 0.388895)
entity17262.getComponent(Transform).scale.set(0.92, 0.92, 0.92)
entity17262.addComponent(new GLTFShape("unity_assets/entity15968.gltf"))
entity17262.getComponent(GLTFShape).withCollisions = false
entity17262.getComponent(Transform).rotation.set(0, 0.388895, 0, -0.9212821)
var entity15302 = new Entity("flamingoV3_Art (2)")
entity15302.setParent(entity15560)
entity15302.addComponent(new Transform({ position: new Vector3(30.7, 1.25, 23.31) }))
entity15302.getComponent(Transform).rotation.set(0, 0.8076288, 0, 0.5896912)
entity15302.getComponent(Transform).scale.set(1.2073, 1.2073, 1.2073)
entity15302.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity15302.getComponent(GLTFShape).withCollisions = false
entity15302.getComponent(Transform).rotation.set(0, 0.5896911, 0, -0.8076288)
var entity15210 = new Entity("flamingoV3_Art (3)")
entity15210.setParent(entity15560)
entity15210.addComponent(new Transform({ position: new Vector3(-19.22, 3.91, -13.77) }))
entity15210.getComponent(Transform).rotation.set(0, 0.4081843, 0, 0.9128996)
entity15210.getComponent(Transform).scale.set(0.9910812, 0.9910814, 0.9910812)
entity15210.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity15210.getComponent(GLTFShape).withCollisions = false
entity15210.getComponent(Transform).rotation.set(0, 0.9128996, 0, -0.4081844)
var entity16774 = new Entity("flamingoV3_Art (4)")
entity16774.setParent(entity15560)
entity16774.addComponent(new Transform({ position: new Vector3(-23.12, 3.84, -9.25) }))
entity16774.getComponent(Transform).rotation.set(0, 0.8069277, 0, 0.5906503)
entity16774.getComponent(Transform).scale.set(0.546432, 0.546432, 0.546432)
entity16774.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity16774.getComponent(GLTFShape).withCollisions = false
entity16774.getComponent(Transform).rotation.set(0, 0.5906503, 0, -0.8069277)
var entity16866 = new Entity("flamingoV3_Art (5)")
entity16866.setParent(entity15560)
entity16866.addComponent(new Transform({ position: new Vector3(-22.63, 3.84, 9.87) }))
entity16866.getComponent(Transform).rotation.set(0, 0.9312471, 0, 0.3643883)
entity16866.getComponent(Transform).scale.set(0.546432, 0.546432, 0.546432)
entity16866.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity16866.getComponent(GLTFShape).withCollisions = false
entity16866.getComponent(Transform).rotation.set(0, 0.3643883, 0, -0.9312471)
var entity16112 = new Entity("flamingoV3_Art (6)")
entity16112.setParent(entity15560)
entity16112.addComponent(new Transform({ position: new Vector3(-19.44, 3.83, 13.56) }))
entity16112.getComponent(Transform).rotation.set(0, 0.8422921, 0, 0.5390214)
entity16112.getComponent(Transform).scale.set(1, 1, 1)
entity16112.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity16112.getComponent(GLTFShape).withCollisions = false
entity16112.getComponent(Transform).rotation.set(0, 0.5390214, 0, -0.8422921)
var entity14908 = new Entity("flamingoV2_Art (1)")
entity14908.setParent(entity15560)
entity14908.addComponent(new Transform({ position: new Vector3(-18.05, 3.82, -9.92) }))
entity14908.getComponent(Transform).rotation.set(0, 0.7776656, 0, 0.6286783)
entity14908.getComponent(Transform).scale.set(0.6745548, 0.6745547, 0.6745548)
entity14908.addComponent(new GLTFShape("unity_assets/entity17120.gltf"))
entity14908.getComponent(GLTFShape).withCollisions = false
entity14908.getComponent(Transform).rotation.set(0, 0.6286782, 0, -0.7776656)
var entity15612 = new Entity("flamingoV2_Art (2)")
entity15612.setParent(entity15560)
entity15612.addComponent(new Transform({ position: new Vector3(-18.76, 3.82, 10.99) }))
entity15612.getComponent(Transform).rotation.set(0, 0.9319745, 0, 0.362524)
entity15612.getComponent(Transform).scale.set(0.6745545, 0.6745547, 0.6745546)
entity15612.addComponent(new GLTFShape("unity_assets/entity17120.gltf"))
entity15612.getComponent(GLTFShape).withCollisions = false
entity15612.getComponent(Transform).rotation.set(0, 0.362524, 0, -0.9319745)
var entity16026 = new Entity("AnimLightBulb_Art")
entity16026.setParent(entity15560)
entity16026.addComponent(new Transform({ position: new Vector3(33.3, -0.04, -9.77) }))
entity16026.getComponent(Transform).rotation.set(6.125495E-17, 0.9999999, -6.125495E-17, 0.0003692826)
entity16026.getComponent(Transform).scale.set(1, 1, 1)
entity16026.addComponent(new GLTFShape("unity_assets/entity16026.gltf"))
entity16026.getComponent(GLTFShape).withCollisions = false
entity16026.getComponent(Transform).rotation.set(6.125495E-17, 0.0003692389, 6.125494E-17, -0.9999999)
var entity16940 = new Entity("AnimLightBulb_Art (1)")
entity16940.setParent(entity15560)
entity16940.addComponent(new Transform({ position: new Vector3(33.3, 0, 9.77) }))
entity16940.getComponent(Transform).rotation.set(6.125495E-17, 0.9999999, -6.125495E-17, 0.0003692826)
entity16940.getComponent(Transform).scale.set(1, 1, -1)
entity16940.addComponent(new GLTFShape("unity_assets/entity16026.gltf"))
entity16940.getComponent(GLTFShape).withCollisions = false
entity16940.getComponent(Transform).rotation.set(6.125495E-17, 0.0003692389, 6.125494E-17, -0.9999999)
var entity16724 = new Entity("PalmBuildingInterior_Art")
entity16724.setParent(entity15560)
entity16724.addComponent(new Transform({ position: new Vector3(2.067768, 7.7, 0.3176456) }))
entity16724.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16724.getComponent(Transform).scale.set(1, 1, 1)
entity16724.addComponent(new GLTFShape("unity_assets/entity16724.gltf"))
entity16724.getComponent(GLTFShape).withCollisions = false
entity16724.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity16642 = new Entity("PlatesStage_Art")
entity16642.setParent(entity15560)
entity16642.addComponent(new Transform({ position: new Vector3(-10.38203, 16.98582, 0.1634143) }))
entity16642.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16642.getComponent(Transform).scale.set(1, 1, 1)
entity16642.addComponent(new GLTFShape("unity_assets/entity16642.gltf"))
entity16642.getComponent(GLTFShape).withCollisions = false
entity16642.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity15392 = new Entity("PoapMachine_Art")
entity15392.setParent(entity15560)
entity15392.addComponent(new Transform({ position: new Vector3(2.686924, 13.23, 40.64613) }))
entity15392.getComponent(Transform).rotation.set(0, 0.5844304, 0, 0.8114438)
entity15392.getComponent(Transform).scale.set(1, 1, 1)
entity15392.addComponent(new GLTFShape("unity_assets/entity15392.gltf"))
entity15392.getComponent(GLTFShape).withCollisions = false
entity15392.getComponent(Transform).rotation.set(0, 0.8114438, 0, -0.5844305)
entity15392.addComponent(new Poap(entity15392, "MusicFestival2021", false, null)) 
var entity16976 = new Entity("Palm")
entity16976.setParent(entity15560)
entity16976.addComponent(new Transform({ position: new Vector3(1.22, 2.81, -18.55) }))
entity16976.getComponent(Transform).rotation.set(0, -0.6707054, 0, 0.741724)
entity16976.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity16976.addComponent(new GLTFShape("unity_assets/entity16976.gltf"))
entity16976.getComponent(GLTFShape).withCollisions = false
entity16976.getComponent(Transform).rotation.set(0, 0.741724, 0, 0.6707053)
var entity16060 = new Entity("Palm (1)")
entity16060.setParent(entity15560)
entity16060.addComponent(new Transform({ position: new Vector3(3.58, 4.53, 21.93) }))
entity16060.getComponent(Transform).rotation.set(0, 0.8877736, 0, 0.4602804)
entity16060.getComponent(Transform).scale.set(0.56566, 0.56566, 0.56566)
entity16060.addComponent(new GLTFShape("unity_assets/entity16976.gltf"))
entity16060.getComponent(GLTFShape).withCollisions = false
entity16060.getComponent(Transform).rotation.set(0, 0.4602804, 0, -0.8877736)
var entity117102n = new Entity("AnimEarth")
entity117102n.setParent(entity15560)
entity117102n.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity117102n.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity117102n.getComponent(Transform).scale.set(1, 1, 1)
entity117102n.addComponent(new GLTFShape("unity_assets/entity117102n.gltf"))
entity117102n.getComponent(GLTFShape).withCollisions = false
entity117102n.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity15014 = new Entity("flamingoV3_Art (7)")
entity15014.setParent(entity15560)
entity15014.addComponent(new Transform({ position: new Vector3(9.63, 1.35, 18.73) }))
entity15014.getComponent(Transform).rotation.set(0, 0.7547599, 0, -0.6560011)
entity15014.getComponent(Transform).scale.set(0.5594969, 0.5594969, 0.5594969)
entity15014.addComponent(new GLTFShape("unity_assets/entity17028.gltf"))
entity15014.getComponent(GLTFShape).withCollisions = false
entity15014.getComponent(Transform).rotation.set(0, -0.6560012, 0, -0.7547599)
var entity15404 = new Entity("Torch_Art")
entity15404.setParent(entity15560)
entity15404.addComponent(new Transform({ position: new Vector3(1.14, 0.52, 23.02) }))
entity15404.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15404.getComponent(Transform).scale.set(1.558002, 1.558002, 1.558002)
entity15404.addComponent(new GLTFShape("unity_assets/entity15404.gltf"))
entity15404.getComponent(GLTFShape).withCollisions = false
entity15404.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity16542 = new Entity("Building_Art")
entity16542.setParent(entity15560)
entity16542.addComponent(new Transform({ position: new Vector3(-5.688088E-07, 2.505678E-08, 0) }))
entity16542.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16542.getComponent(Transform).scale.set(1, 1, 1)
entity16542.addComponent(new GLTFShape("unity_assets/entity16542.gltf"))
entity16542.getComponent(GLTFShape).withCollisions = false
entity16542.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity15354 = new Entity("Torch_Art (1)")
entity15354.setParent(entity15560)
entity15354.addComponent(new Transform({ position: new Vector3(9.52, 0.53, 16) }))
entity15354.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity15354.getComponent(Transform).scale.set(1.697905, 2.041699, 1.697905)
entity15354.addComponent(new GLTFShape("unity_assets/entity15404.gltf"))
entity15354.getComponent(GLTFShape).withCollisions = false
entity15354.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity15106 = new Entity("flamingoV1_Art (2)")
entity15106.setParent(entity15560)
entity15106.addComponent(new Transform({ position: new Vector3(7.07, 1.3, 19.41) }))
entity15106.getComponent(Transform).rotation.set(0, 0.9212821, 0, 0.388895)
entity15106.getComponent(Transform).scale.set(0.6775064, 0.6775064, 0.6775064)
entity15106.addComponent(new GLTFShape("unity_assets/entity15968.gltf"))
entity15106.getComponent(GLTFShape).withCollisions = false
entity15106.getComponent(Transform).rotation.set(0, 0.388895, 0, -0.9212821)
var entity15158 = new Entity("Palm (2)")
entity15158.setParent(entity15560)
entity15158.addComponent(new Transform({ position: new Vector3(0.81, 2.81, -25.13) }))
entity15158.getComponent(Transform).rotation.set(0, -0.9235147, 0, 0.3835631)
entity15158.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity15158.addComponent(new GLTFShape("unity_assets/entity16976.gltf"))
entity15158.getComponent(GLTFShape).withCollisions = false
entity15158.getComponent(Transform).rotation.set(0, 0.3835631, 0, 0.9235147)
var entity108924n = new Entity("Spot_LightsANdCLouds_Art")
entity108924n.setParent(entity15560)
entity108924n.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity108924n.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity108924n.getComponent(Transform).scale.set(1, 1, 1)
entity108924n.addComponent(new GLTFShape("unity_assets/entity108924n.gltf"))
entity108924n.getComponent(GLTFShape).withCollisions = false
entity108924n.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity16962 = new Entity("Torch_Art (2)")
entity16962.setParent(entity15560)
entity16962.addComponent(new Transform({ position: new Vector3(3.5, -0.68, -18.14) }))
entity16962.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16962.getComponent(Transform).scale.set(1.128618, 1.128618, 1.128618)
entity16962.addComponent(new GLTFShape("unity_assets/entity15404.gltf"))
entity16962.getComponent(GLTFShape).withCollisions = false
entity16962.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity16048 = new Entity("Torch_Art (3)")
entity16048.setParent(entity15560)
entity16048.addComponent(new Transform({ position: new Vector3(4.6, -0.68, -23.85) }))
entity16048.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity16048.getComponent(Transform).scale.set(1.213954, 1.213954, 1.213954)
entity16048.addComponent(new GLTFShape("unity_assets/entity15404.gltf"))
entity16048.getComponent(GLTFShape).withCollisions = false
entity16048.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity16912 = new Entity("fire")
entity16912.setParent(entity15560)
entity16912.addComponent(new Transform({ position: new Vector3(-17.831, 6.18, -7.31061) }))
entity16912.getComponent(Transform).rotation.set(0, -0.9955122, 0.09463346, 0)
entity16912.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity16912.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity14954 = new Entity("fire (1)")
entity14954.setParent(entity15560)
entity14954.addComponent(new Transform({ position: new Vector3(-17.831, 6.18, 7.31061) }))
entity14954.getComponent(Transform).rotation.set(0, -0.9955125, -0.09462963, 0)
entity14954.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity14954.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity17308 = new Entity("fire (2)")
entity17308.setParent(entity15560)
entity17308.addComponent(new Transform({ position: new Vector3(-20.41, 14.92, -18.15) }))
entity17308.getComponent(Transform).rotation.set(-0.1726969, -0.9794129, 0.1029404, -0.01815117)
entity17308.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity17308.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity15410 = new Entity("fire (3)")
entity15410.setParent(entity15560)
entity15410.addComponent(new Transform({ position: new Vector3(-20.41, 14.92, 17.45) }))
entity15410.getComponent(Transform).rotation.set(-0.1726969, -0.9794129, -0.1029404, 0.01815116)
entity15410.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity15410.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

const HUD = getHUD()

const iconList0 = HUD.createIconList({
  bVisible: true,
  vAlign: "center",
  hAlign: "left",
  positionX: 1,
  positionY: 25,
  stackOrientation: 0,
  spacing: 6
})

const iconData_0_0 = {
  imageURL: "assets/UI_Icon_Info.png",
  imageSize: { x: 225, y: 225},
  imageScale: { x: 0.2, y: 0.2},
  vAlign: "center",
  hAlign: "center",
  bVisible: true,
}

iconList0.createIconURL("",iconData_0_0)
