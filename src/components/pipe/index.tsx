import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'
import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import PIPE_GREEN_TOP from '../../assets/pipe-green-inverted.png'
import PIPE_GREEN_BOTTOM from '../../assets/pipe-green.png'
import PIPE_ORANGE_TOP from '../../assets/pipe-orange-inverted.png'
import PIPE_ORANGE_BOTTOM from '../../assets/pipe-orange.png'
import { styles } from './styles'
import { PipeComponent, PipeProps, PipeType, PipeVariant } from './types'

const Pipe: React.FC<PipeProps> = (props: PipeProps) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x
    const height = props.body.bounds.max.y - props.body.bounds.min.y

    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const { variant, type } = props

    const variants: Record<PipeVariant, ImageSourcePropType> = {
        [PipeVariant.GREEN]: PipeType.BOTTOM === type ? PIPE_GREEN_BOTTOM : PIPE_GREEN_TOP,
        [PipeVariant.ORANGE]: PipeType.BOTTOM === type ? PIPE_ORANGE_BOTTOM : PIPE_ORANGE_TOP
    }
    const source = variants[variant]

    return <Image source={source} style={styles(x, y, width, height).pipe} />
}

export default (
    world: Matter.World,
    label: string,
    variant: PipeVariant,
    type: PipeType,
    position: Position,
    size: Size
): PipeComponent => {
    const { x, y } = position
    const { width, height } = size

    const pipe = Matter.Bodies.rectangle(x, y, width, height, { label, isStatic: true })

    Matter.World.add(world, pipe)

    return {
        body: pipe,
        variant,
        type,
        position,
        size,
        /** @ts-ignore */
        renderer: <Pipe />
    }
}
