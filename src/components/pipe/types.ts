import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'

export interface PipeProps {
    body: Matter.Body
    variant: PipeVariant
    type: PipeType
    position: Position
    size: Size
}

export enum PipeVariant {
    GREEN = 'green',
    RED = 'red'
}

export enum PipeType {
    NORMAL = 'normal',
    INVERTED = 'inverted'
}
