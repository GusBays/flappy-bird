import Matter from 'matter-js'
import { BirdComponent } from '../components/bird/types'
import { FloorComponent } from '../components/floor/types'
import { PipeComponent } from '../components/pipe/types'

export interface Entity {
    physics: Physics
    Bird: BirdComponent
    Floor: FloorComponent
    PipeTop1: PipeComponent
    PipeBottom1: PipeComponent
    PipeTop2: PipeComponent
    PipeBottom2: PipeComponent
}

export interface Physics {
    engine: Matter.Engine
    world: Matter.World
}
