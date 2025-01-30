import Matter from 'matter-js'
import { BOTTOM } from '../@constants/bottom'
import bird from '../components/bird'
import floor from '../components/floor'
import pipe from '../components/pipe'
import { getPipesConfig } from '../components/pipe/helper'
import { PipeComponent, PipeType, PipeVariant } from '../components/pipe/types'
import { getWindowHeight, getWindowWidth } from '../utils/window'
import { Entity } from './types'

export const Entities = (): Entity => {
    const engine = Matter.Engine.create({ enableSleeping: false })
    const { world } = engine

    engine.gravity.y = 0.4

    const [width, height] = [getWindowWidth(), getWindowHeight()]

    const firstPipePair = getPipesConfig()
    const secondPipePair = getPipesConfig(width * 0.9)

    return {
        physics: { engine, world },
        Bird: bird(world, { x: 120, y: 400 }, { height: 40, width: 40 }),
        Floor: floor(world, '#E1D694', { x: width / 2, y: height - 70 }, { height: BOTTOM + 20, width }),
        PipeTop1: pipe(
            world,
            'PipeTop1',
            PipeVariant.GREEN,
            PipeType.TOP,
            firstPipePair.top.position,
            firstPipePair.top.size
        ),
        PipeBottom1: pipe(
            world,
            'PipeBottom1',
            PipeVariant.GREEN,
            PipeType.BOTTOM,
            firstPipePair.bottom.position,
            firstPipePair.bottom.size
        ),
        PipeTop2: pipe(
            world,
            'PipeTop2',
            PipeVariant.GREEN,
            PipeType.TOP,
            secondPipePair.top.position,
            secondPipePair.top.size
        ),
        PipeBottom2: pipe(
            world,
            'PipeBottom2',
            PipeVariant.GREEN,
            PipeType.BOTTOM,
            secondPipePair.bottom.position,
            secondPipePair.bottom.size
        )
    }
}

export function Physics(entity: Entity, { touches, time, dispatch }: any) {
    const { engine } = entity.physics

    const byPress = (touch: React.TouchEvent) => touch.type === 'press'
    const setNewSpeed = (touch: React.TouchEvent) => {
        Matter.Body.setVelocity(entity.Bird.body, { x: 0, y: -4 })
    }
    touches.filter(byPress).forEach(setNewSpeed)

    for (let index = 1; index <= 2; index++) {
        const top = entity[`PipeTop${index}` as keyof Entity] as PipeComponent
        const bottom = entity[`PipeBottom${index}` as keyof Entity] as PipeComponent

        const setNewPosition = () => {
            const pair = getPipesConfig(getWindowWidth() * 0.9)

            Matter.Body.setPosition(top.body, pair.top.position)
            Matter.Body.setPosition(bottom.body, pair.bottom.position)
        }

        const isAfterScreen = bottom.body.bounds.max.x <= 0
        if (isAfterScreen) setNewPosition()

        const addMovement = () => {
            Matter.Body.translate(top.body, { x: -3, y: 0 })
            Matter.Body.translate(bottom.body, { x: -3, y: 0 })
        }

        addMovement()
    }

    const sendGameOver = () => dispatch({ type: 'game_over' })
    Matter.Events.on(engine, 'collisionStart', sendGameOver)

    Matter.Engine.update(engine, time.delta)

    return entity
}
