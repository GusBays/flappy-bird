import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'

export interface FloorProps {
    body: Matter.Body
    color: string
    position: Position
    size: Size
}

export interface FloorComponent extends FloorProps {
    renderer: JSX.Element
}
