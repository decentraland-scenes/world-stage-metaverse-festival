export const videoMat = new BasicMaterial()

export const S1 = new Entity()
const planeS1 = new PlaneShape()

S1.addComponent(planeS1)

S1.addComponent(
  new Transform({
    position: new Vector3(8, 12.8, 31.7),
    scale: new Vector3(16 * 1.35, 9 * 1.35, 1),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)

S1.addComponent(videoMat)

engine.addEntity(S1)
