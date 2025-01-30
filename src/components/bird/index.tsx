import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'
import React from 'react'
import { Image } from 'react-native'
import BIRD from '../../assets/bird.png'
import { styles } from './styles'
import { BirdComponent, BirdProps } from './types'

const Bird: React.FC<BirdProps> = (props: BirdProps) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x
    const height = props.body.bounds.max.y - props.body.bounds.min.y

    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    return <Image source={BIRD} style={styles(x, y, width, height).bird} />
}

export default (world: Matter.World, position: Position, size: Size): BirdComponent => {
    const { x, y } = position
    const { width, height } = size
    const label = 'Bird'

    const bird = Matter.Bodies.rectangle(x, y, width, height, { label })

    Matter.World.add(world, bird)

    return {
        body: bird,
        position,
        /** @ts-ignore */
        renderer: <Bird />
    }
}
