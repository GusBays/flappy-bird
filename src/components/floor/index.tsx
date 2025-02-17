import { Position } from '@/src/@types/position'
import { Size } from '@/src/@types/size'
import Matter from 'matter-js'
import { View } from 'react-native'
import { styles } from './styles'
import { FloorComponent, FloorProps } from './types'

const Floor: React.FC<FloorProps> = (props: FloorProps) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x
    const height = props.body.bounds.max.y - props.body.bounds.min.y

    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const { color } = props

    return <View style={styles(x, y, width, height, color).floor} />
}

export default (world: Matter.World, color: string, position: Position, size: Size): FloorComponent => {
    const { x, y } = position
    const { width, height } = size
    const label = 'Floor'

    const floor = Matter.Bodies.rectangle(x, y, width, height, { label, isStatic: true })

    Matter.World.add(world, floor)

    return {
        body: floor,
        color,
        position,
        size,
        /** @ts-ignore */
        renderer: <Floor />
    }
}
