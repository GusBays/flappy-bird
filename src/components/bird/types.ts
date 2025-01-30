import { Position } from '@/src/@types/position'
import Matter from 'matter-js'

export interface BirdProps {
    body: Matter.Body
    position: Position
}

export interface BirdComponent extends BirdProps {
    renderer: JSX.Element
}
