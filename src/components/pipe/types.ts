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

export interface PipeComponent extends PipeProps {
    renderer: JSX.Element
}

export enum PipeVariant {
    GREEN = 'green',
    ORANGE = 'orange'
}

export enum PipeType {
    BOTTOM = 'bottom',
    TOP = 'top'
}

export interface PipeConfig {
    position: Position
    size: Size
}

export interface PipesConfig {
    top: PipeConfig
    bottom: PipeConfig
}
