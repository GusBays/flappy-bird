import { Position } from '@/src/@types/position'
import Matter from 'matter-js'

export interface BirdProps {
    body: Matter.Body
    position: Position
}
