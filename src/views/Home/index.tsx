import { Entities, Physics } from '@/src/entities'
import { useRef, useState } from 'react'
import { GameEngine } from 'react-native-game-engine'
import GameOver from '../GameOver'
import Start from '../Start'
import { styles } from './styles'

const Home = () => {
    const [running, setIsRunning] = useState(false)
    const [gameOver, setIsGameOver] = useState(false)

    const engineRef = useRef()

    const onStart = () => {
        setIsRunning(true)
        setIsGameOver(false)
    }

    const onGameOver = () => {
        setIsRunning(false)
        setIsGameOver(true)
    }

    const onRestart = () => {
        setIsGameOver(false)
    }

    const onEvent = (e: Event) => {
        switch (e.type) {
            case 'game_over':
                onGameOver()
                break
        }
    }

    if (false === running && false === gameOver) return <Start onStart={onStart} />
    if (false === running && gameOver) return <GameOver onRestart={onRestart} />

    return (
        <GameEngine
            /** @ts-ignore */
            ref={engineRef}
            running={running}
            entities={Entities()}
            systems={[Physics]}
            onEvent={onEvent}
            style={styles.engine}
        />
    )
}

export default Home
