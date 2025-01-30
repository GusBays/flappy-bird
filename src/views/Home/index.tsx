import entities from '@/src/entities'
import { useRef, useState } from 'react'
import { GameEngine } from 'react-native-game-engine'
import { styles } from './styles'

const Home = () => {
    const [running, setIsRunning] = useState(false)
    const engineRef = useRef()

    const onPressStart = () => {}

    // return (
    //     <ImageBackground source={BACKGROUND} resizeMode="cover" style={styles.container}>
    //         <Start onPress={onPressStart} />
    //     </ImageBackground>
    // )

    return (
        <GameEngine
            /** @ts-ignore */
            ref={engineRef}
            running={running}
            entities={entities()}
            style={styles.engine}
        />
    )
}

export default Home
