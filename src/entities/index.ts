import Matter from 'matter-js'
import bird from '../components/bird'

export default () => {
    const engine = Matter.Engine.create({ enableSleeping: false })
    const { world } = engine

    return {
        physics: { engine, world },
        Bird: bird(world, { x: 120, y: 400 }, { height: 40, width: 40 })
    }
}
