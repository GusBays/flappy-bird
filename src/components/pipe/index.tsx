import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'
import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import PIPE_GREEN_INVERTED from '../../assets/pipe-green-inverted.png'
import PIPE_GREEN from '../../assets/pipe-green.png'
import PIPE_RED_INVERTED from '../../assets/pipe-red-inverted.png'
import PIPE_RED from '../../assets/pipe-red.png'
import { styles } from './styles'
import { PipeProps, PipeType, PipeVariant } from './types'

const Pipe: React.FC<PipeProps> = (props: PipeProps) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x
    const height = props.body.bounds.max.y - props.body.bounds.min.y

    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const { variant, type } = props

    const variants: Record<PipeVariant, ImageSourcePropType> = {
        [PipeVariant.GREEN]: PipeType.NORMAL === type ? PIPE_GREEN : PIPE_GREEN_INVERTED,
        [PipeVariant.RED]: PipeType.NORMAL === type ? PIPE_RED : PIPE_RED_INVERTED
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
) => {
    const { x, y } = position
    const { width, height } = size

    const pipe = Matter.Bodies.rectangle(x, y, width, height, { label, isStatic: true })

    Matter.World.add(world, pipe)

    return {
        body: pipe,
        variant,
        type,
        position,
        /** @ts-ignore */
        renderer: <Pipe />
    }
}
