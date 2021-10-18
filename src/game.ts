import { Poap } from "./imports/index"
import { TagComponent } from "./imports/index"
import { getHUD } from "./hud"

var entity52420 = new Entity("Main Camera")
entity52420.addComponent(new TagComponent())
entity52420.getComponent(TagComponent).tag = "MainCamera" 
engine.addEntity(entity52420)
entity52420.addComponent(new Transform({ position: new Vector3(0, 1, -10) }))
entity52420.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity52420.getComponent(Transform).scale.set(1, 1, 1)

var entity52084 = new Entity("Directional Light")
engine.addEntity(entity52084)
entity52084.addComponent(new Transform({ position: new Vector3(0, 3, 0) }))
entity52084.getComponent(Transform).rotation.set(0.4082179, -0.2345697, 0.1093816, 0.8754261)
entity52084.getComponent(Transform).scale.set(1, 1, 1)

var entity51930 = new Entity("COG")
engine.addEntity(entity51930)
entity51930.addComponent(new Transform({ position: new Vector3(30.2, -0.09, 31.981) }))
entity51930.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity51930.getComponent(Transform).scale.set(0.92614, 1, 0.9562815)

var entity52138 = new Entity("flamingoV1_Art")
entity52138.setParent(entity51930)
entity52138.addComponent(new Transform({ position: new Vector3(28.53, 0.85, -20.46) }))
entity52138.getComponent(Transform).rotation.set(0, 0.3335746, 0, 0.9427237)
entity52138.getComponent(Transform).scale.set(1, 1, 1)
entity52138.addComponent(new GLTFShape("unity_assets/entity52138.gltf"))
entity52138.getComponent(GLTFShape).withCollisions = false
entity52138.getComponent(Transform).rotation.set(0, 0.9427237, 0, -0.3335747)
var entity52982 = new Entity("flamingoV2_Art")
entity52982.setParent(entity51930)
entity52982.addComponent(new Transform({ position: new Vector3(30.11, 1.34, 19.03) }))
entity52982.getComponent(Transform).rotation.set(0, 0.9499435, 0, 0.3124217)
entity52982.getComponent(Transform).scale.set(0.5938382, 0.5938381, 0.5938382)
entity52982.addComponent(new GLTFShape("unity_assets/entity52982.gltf"))
entity52982.getComponent(GLTFShape).withCollisions = false
entity52982.getComponent(Transform).rotation.set(0, 0.3124217, 0, -0.9499435)
var entity59364n = new Entity("Building_Art")
entity59364n.setParent(entity51930)
entity59364n.addComponent(new Transform({ position: new Vector3(-5.688088E-07, 2.505678E-08, 0) }))
entity59364n.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity59364n.getComponent(Transform).scale.set(1, 1, 1)
entity59364n.addComponent(new GLTFShape("unity_assets/entity59364n.gltf"))
entity59364n.getComponent(GLTFShape).withCollisions = false
entity59364n.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity52052 = new Entity("Entrance_Art")
entity52052.setParent(entity51930)
entity52052.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity52052.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity52052.getComponent(Transform).scale.set(1, 1, 1)
entity52052.addComponent(new GLTFShape("unity_assets/entity52052.gltf"))
entity52052.getComponent(GLTFShape).withCollisions = false
entity52052.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity52890 = new Entity("flamingoV3_Art")
entity52890.setParent(entity51930)
entity52890.addComponent(new Transform({ position: new Vector3(30.47, 1.23, -26.05) }))
entity52890.getComponent(Transform).rotation.set(0, 0.879474, 0, 0.4759469)
entity52890.getComponent(Transform).scale.set(1.193, 1.193, 1.193)
entity52890.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity52890.getComponent(GLTFShape).withCollisions = false
entity52890.getComponent(Transform).rotation.set(0, 0.4759469, 0, -0.879474)
var entity52374 = new Entity("flamingoV3_Art (1)")
entity52374.setParent(entity51930)
entity52374.addComponent(new Transform({ position: new Vector3(24.48336, 1.29, -25.37756) }))
entity52374.getComponent(Transform).rotation.set(0, 0.8316047, 0, 0.555368)
entity52374.getComponent(Transform).scale.set(0.768313, 0.7683131, 0.768313)
entity52374.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity52374.getComponent(GLTFShape).withCollisions = false
entity52374.getComponent(Transform).rotation.set(0, 0.5553679, 0, -0.8316047)
var entity53074 = new Entity("flamingoV1_Art (1)")
entity53074.setParent(entity51930)
entity53074.addComponent(new Transform({ position: new Vector3(24.67, 0, 22.66) }))
entity53074.getComponent(Transform).rotation.set(0, 0.9212821, 0, 0.388895)
entity53074.getComponent(Transform).scale.set(0.92, 0.92, 0.92)
entity53074.addComponent(new GLTFShape("unity_assets/entity52138.gltf"))
entity53074.getComponent(GLTFShape).withCollisions = false
entity53074.getComponent(Transform).rotation.set(0, 0.388895, 0, -0.9212821)
var entity51808 = new Entity("flamingoV3_Art (2)")
entity51808.setParent(entity51930)
entity51808.addComponent(new Transform({ position: new Vector3(30.7, 1.25, 23.31) }))
entity51808.getComponent(Transform).rotation.set(0, 0.8076288, 0, 0.5896912)
entity51808.getComponent(Transform).scale.set(1.2073, 1.2073, 1.2073)
entity51808.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity51808.getComponent(GLTFShape).withCollisions = false
entity51808.getComponent(Transform).rotation.set(0, 0.5896911, 0, -0.8076288)
var entity51714 = new Entity("flamingoV3_Art (3)")
entity51714.setParent(entity51930)
entity51714.addComponent(new Transform({ position: new Vector3(-19.22, 3.91, -13.77) }))
entity51714.getComponent(Transform).rotation.set(0, 0.4081843, 0, 0.9128996)
entity51714.getComponent(Transform).scale.set(0.9910812, 0.9910814, 0.9910812)
entity51714.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity51714.getComponent(GLTFShape).withCollisions = false
entity51714.getComponent(Transform).rotation.set(0, 0.9128996, 0, -0.4081844)
var entity52282 = new Entity("flamingoV3_Art (6)")
entity52282.setParent(entity51930)
entity52282.addComponent(new Transform({ position: new Vector3(-19.44, 3.83, 13.56) }))
entity52282.getComponent(Transform).rotation.set(0, 0.8422921, 0, 0.5390214)
entity52282.getComponent(Transform).scale.set(1, 1, 1)
entity52282.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity52282.getComponent(GLTFShape).withCollisions = false
entity52282.getComponent(Transform).rotation.set(0, 0.5390214, 0, -0.8422921)
var entity51398 = new Entity("flamingoV2_Art (1)")
entity51398.setParent(entity51930)
entity51398.addComponent(new Transform({ position: new Vector3(-18.05, 3.82, -9.92) }))
entity51398.getComponent(Transform).rotation.set(0, 0.7776656, 0, 0.6286783)
entity51398.getComponent(Transform).scale.set(0.6745548, 0.6745547, 0.6745548)
entity51398.addComponent(new GLTFShape("unity_assets/entity52982.gltf"))
entity51398.getComponent(GLTFShape).withCollisions = false
entity51398.getComponent(Transform).rotation.set(0, 0.6286782, 0, -0.7776656)
var entity51982 = new Entity("flamingoV2_Art (2)")
entity51982.setParent(entity51930)
entity51982.addComponent(new Transform({ position: new Vector3(-18.76, 3.82, 10.99) }))
entity51982.getComponent(Transform).rotation.set(0, 0.9319745, 0, 0.362524)
entity51982.getComponent(Transform).scale.set(0.6745545, 0.6745547, 0.6745546)
entity51982.addComponent(new GLTFShape("unity_assets/entity52982.gltf"))
entity51982.getComponent(GLTFShape).withCollisions = false
entity51982.getComponent(Transform).rotation.set(0, 0.362524, 0, -0.9319745)
var entity52196 = new Entity("AnimLightBulb_Art")
entity52196.setParent(entity51930)
entity52196.addComponent(new Transform({ position: new Vector3(33.3, -0.04, -9.77) }))
entity52196.getComponent(Transform).rotation.set(6.125495E-17, 0.9999999, -6.125495E-17, 0.0003692826)
entity52196.getComponent(Transform).scale.set(1, 1, 1)
entity52196.addComponent(new GLTFShape("unity_assets/entity52196.gltf"))
entity52196.getComponent(GLTFShape).withCollisions = false
entity52196.getComponent(Transform).rotation.set(6.125495E-17, 0.0003692389, 6.125494E-17, -0.9999999)
var entity52804 = new Entity("AnimLightBulb_Art (1)")
entity52804.setParent(entity51930)
entity52804.addComponent(new Transform({ position: new Vector3(33.3, 0, 9.77) }))
entity52804.getComponent(Transform).rotation.set(6.125495E-17, 0.9999999, -6.125495E-17, 0.0003692826)
entity52804.getComponent(Transform).scale.set(1, 1, -1)
entity52804.addComponent(new GLTFShape("unity_assets/entity52196.gltf"))
entity52804.getComponent(GLTFShape).withCollisions = false
entity52804.getComponent(Transform).rotation.set(6.125495E-17, 0.0003692389, 6.125494E-17, -0.9999999)
var entity52746 = new Entity("PalmBuildingInterior_Art")
entity52746.setParent(entity51930)
entity52746.addComponent(new Transform({ position: new Vector3(2.067768, 7.7, 0.3176456) }))
entity52746.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity52746.getComponent(Transform).scale.set(1, 1, 1)
entity52746.addComponent(new GLTFShape("unity_assets/entity52746.gltf"))
entity52746.getComponent(GLTFShape).withCollisions = false
entity52746.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity51898 = new Entity("PoapMachine_Art")
entity51898.setParent(entity51930)
entity51898.addComponent(new Transform({ position: new Vector3(0.946, 12.26, 43.632) }))
entity51898.getComponent(Transform).rotation.set(0, 0.5875719, 0, 0.809172)
entity51898.getComponent(Transform).scale.set(1, 1, 1)
entity51898.addComponent(new GLTFShape("unity_assets/entity51898.gltf"))
entity51898.getComponent(GLTFShape).withCollisions = false
entity51898.getComponent(Transform).rotation.set(0, 0.809172, 0, -0.5875719)
entity51898.addComponent(new Poap(entity51898, "MusicFestival2021", false, null)) 
var entity52838 = new Entity("Palm")
entity52838.setParent(entity51930)
entity52838.addComponent(new Transform({ position: new Vector3(1.22, 2.81, -18.55) }))
entity52838.getComponent(Transform).rotation.set(0, -0.6707054, 0, 0.741724)
entity52838.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity52838.addComponent(new GLTFShape("unity_assets/entity52838.gltf"))
entity52838.getComponent(GLTFShape).withCollisions = false
entity52838.getComponent(Transform).rotation.set(0, 0.741724, 0, 0.6707053)
var entity52230 = new Entity("Palm (1)")
entity52230.setParent(entity51930)
entity52230.addComponent(new Transform({ position: new Vector3(3.54, 3.39, 23.35) }))
entity52230.getComponent(Transform).rotation.set(0, 0.7507208, 0, 0.6606197)
entity52230.getComponent(Transform).scale.set(0.42028, 0.3562419, 0.42028)
entity52230.addComponent(new GLTFShape("unity_assets/entity52838.gltf"))
entity52230.getComponent(GLTFShape).withCollisions = false
entity52230.getComponent(Transform).rotation.set(0, 0.6606196, 0, -0.7507208)
var entity52778 = new Entity("fire(30)")
entity52778.setParent(entity51930)
entity52778.addComponent(new Transform({ position: new Vector3(-17.831, 6.18, -7.31061) }))
entity52778.getComponent(Transform).rotation.set(0, -0.9955122, 0.09463346, 0)
entity52778.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity52778.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity51518 = new Entity("flamingoV3_Art (7)")
entity51518.setParent(entity51930)
entity51518.addComponent(new Transform({ position: new Vector3(9.108487, 1.21, 18.20792) }))
entity51518.getComponent(Transform).rotation.set(0, 0.2886949, 0, -0.9574212)
entity51518.getComponent(Transform).scale.set(0.4322788, 0.4322788, 0.4322788)
entity51518.addComponent(new GLTFShape("unity_assets/entity52890.gltf"))
entity51518.getComponent(GLTFShape).withCollisions = false
entity51518.getComponent(Transform).rotation.set(0, -0.9574212, 0, -0.2886949)
var entity51910 = new Entity("Torch_Art")
entity51910.setParent(entity51930)
entity51910.addComponent(new Transform({ position: new Vector3(3.65, 0.72, 24.68) }))
entity51910.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity51910.getComponent(Transform).scale.set(1.056574, 1.056574, 1.056574)
entity51910.addComponent(new GLTFShape("unity_assets/entity51910.gltf"))
entity51910.getComponent(GLTFShape).withCollisions = false
entity51910.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity51860 = new Entity("Torch_Art (1)")
entity51860.setParent(entity51930)
entity51860.addComponent(new Transform({ position: new Vector3(10.42, 1.0766, 18.84) }))
entity51860.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity51860.getComponent(Transform).scale.set(1.127144, 1.35537, 1.127144)
entity51860.addComponent(new GLTFShape("unity_assets/entity51910.gltf"))
entity51860.getComponent(GLTFShape).withCollisions = false
entity51860.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity51610 = new Entity("flamingoV1_Art (2)")
entity51610.setParent(entity51930)
entity51610.addComponent(new Transform({ position: new Vector3(8.745363, 1.1713, 20.16311) }))
entity51610.getComponent(Transform).rotation.set(0, 0.9867461, 0, -0.1622722)
entity51610.getComponent(Transform).scale.set(0.5234554, 0.5234554, 0.5234554)
entity51610.addComponent(new GLTFShape("unity_assets/entity52138.gltf"))
entity51610.getComponent(GLTFShape).withCollisions = false
entity51610.getComponent(Transform).rotation.set(0, -0.1622723, 0, -0.9867461)
var entity51662 = new Entity("Palm (2)")
entity51662.setParent(entity51930)
entity51662.addComponent(new Transform({ position: new Vector3(0.81, 2.81, -25.13) }))
entity51662.getComponent(Transform).rotation.set(0, -0.9235147, 0, 0.3835631)
entity51662.getComponent(Transform).scale.set(0.4371703, 0.4371703, 0.4371703)
entity51662.addComponent(new GLTFShape("unity_assets/entity52838.gltf"))
entity51662.getComponent(GLTFShape).withCollisions = false
entity51662.getComponent(Transform).rotation.set(0, 0.3835631, 0, 0.9235147)
var entity51458 = new Entity("fire (31)")
entity51458.setParent(entity51930)
entity51458.addComponent(new Transform({ position: new Vector3(-17.831, 6.18, 7.31061) }))
entity51458.getComponent(Transform).rotation.set(0, -0.9955125, -0.09462963, 0)
entity51458.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity51458.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity52826 = new Entity("Torch_Art (2)")
entity52826.setParent(entity51930)
entity52826.addComponent(new Transform({ position: new Vector3(3.5, -0.68, -18.14) }))
entity52826.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity52826.getComponent(Transform).scale.set(1.128618, 1.128618, 1.128618)
entity52826.addComponent(new GLTFShape("unity_assets/entity51910.gltf"))
entity52826.getComponent(GLTFShape).withCollisions = false
entity52826.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity52218 = new Entity("Torch_Art (3)")
entity52218.setParent(entity51930)
entity52218.addComponent(new Transform({ position: new Vector3(4.6, -0.68, -23.85) }))
entity52218.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity52218.getComponent(Transform).scale.set(1.213954, 1.213954, 1.213954)
entity52218.addComponent(new GLTFShape("unity_assets/entity51910.gltf"))
entity52218.getComponent(GLTFShape).withCollisions = false
entity52218.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity53120 = new Entity("fire (32)")
entity53120.setParent(entity51930)
entity53120.addComponent(new Transform({ position: new Vector3(-20.41, 19.57, -18.15) }))
entity53120.getComponent(Transform).rotation.set(-0.1726969, -0.9794129, 0.1029404, -0.01815117)
entity53120.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity53120.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity51916 = new Entity("fire (33)")
entity51916.setParent(entity51930)
entity51916.addComponent(new Transform({ position: new Vector3(-20.41, 19.57, 17.45) }))
entity51916.getComponent(Transform).rotation.set(-0.1726969, -0.9794129, -0.1029404, 0.01815116)
entity51916.getComponent(Transform).scale.set(1.07975, 1.001554, 1.044023)
entity51916.addComponent(new GLTFShape("assets/glb_assets/FireWork.glb"))

var entity51444 = new Entity("SecondaryStage")
entity51444.setParent(entity51930)
entity51444.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity51444.getComponent(Transform).rotation.set(0, 1, 0, 0)
entity51444.getComponent(Transform).scale.set(1, 1, 1)
entity51444.addComponent(new GLTFShape("assets/glb_assets/SecondaryStage.glb"))

var entity52764 = new Entity("SpotLights")
entity52764.setParent(entity51930)
entity52764.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity52764.getComponent(Transform).rotation.set(0, 1, 0, 0)
entity52764.getComponent(Transform).scale.set(1, 1, 1)
entity52764.addComponent(new GLTFShape("assets/glb_assets/SpotLights.glb"))

var entity53186 = new Entity("AnimEarth")
entity53186.setParent(entity51930)
entity53186.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity53186.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity53186.getComponent(Transform).scale.set(0.01, 0.01, 0.01)
entity53186.addComponent(new GLTFShape("unity_assets/entity53186.gltf"))
entity53186.getComponent(GLTFShape).withCollisions = false
entity53186.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity52750 = new Entity("PlatesStage")
entity52750.setParent(entity51930)
entity52750.addComponent(new Transform({ position: new Vector3(0, -1.41, 0) }))
entity52750.getComponent(Transform).rotation.set(0, 1, 0, 0)
entity52750.getComponent(Transform).scale.set(1, 1, 1)
entity52750.addComponent(new GLTFShape("assets/glb_assets/PlatesStage.glb"))

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
