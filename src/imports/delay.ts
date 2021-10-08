import utils from "../../node_modules/decentraland-ecs-utils/index"
export function delay(callback: Function, time: number){
  const entity = new Entity()
  entity.addComponent(new utils.Delay(time, ()=>{callback()}))
  engine.addEntity(entity)
  return entity;
}
export function clearDelay(timeout:any) {
  const entity: Entity = (timeout as Entity)
  if(entity && entity.hasComponent(utils.Delay)){
    entity.getComponent(utils.Delay).setCallback(()=>{})
    entity.removeComponent(utils.Delay)
    engine.removeEntity(entity)
  }
}
