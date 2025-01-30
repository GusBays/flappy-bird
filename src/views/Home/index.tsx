import { HIGH_SCORE } from '@/src/@constants/high-score'
import { Entities, Physics } from '@/src/entities'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Audio, AVPlaybackSource } from 'expo-av'
import { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import HIT from '../../assets/sounds/hit.mp3'
import SCORE from '../../assets/sounds/score.mp3'
import WING from '../../assets/sounds/wing.mp3'
import GameOver from '../GameOver'
import Start from '../Start'
import { styles } from './styles'

const Home = () => {
    const [running, setIsRunning] = useState(false)
    const [gameOver, setIsGameOver] = useState(false)
    const [highScore, setHighScore] = useState<number | null>(null)

    const [score, setScore] = useState<number>(0)
    const [windAudio, setWindAudio] = useState<Audio.SoundObject | null>(null)
    const [scoreAudio, setScoreAudio] = useState<Audio.SoundObject | null>(null)
    const [hitAudio, setHitAudio] = useState<Audio.SoundObject | null>(null)

    const loadSounds = () => {
        const createSoundObj = (audio: AVPlaybackSource) => Audio.Sound.createAsync(audio)

        Promise.all([createSoundObj(SCORE), createSoundObj(WING), createSoundObj(HIT)]).then(([score, wind, hit]) => {
            setWindAudio(wind)
            setScoreAudio(score)
            setHitAudio(hit)
        })
    }
    useEffect(loadSounds)

    const loadHighScore = () => {
        const setOnHighScore = (value: string | null) => setHighScore(Number(value) || null)
        AsyncStorage.getItem(HIGH_SCORE).then(setOnHighScore)
    }
    useEffect(loadHighScore)

    const engineRef = useRef()

    const onStart = () => {
        setIsRunning(true)
        setIsGameOver(false)
    }

    const onPress = async () => {
        if (windAudio) await windAudio.sound.replayAsync()
    }

    const onScore = async () => {
        if (scoreAudio) await scoreAudio.sound.replayAsync()
        setScore(score + 1)
    }

    const setHighScoreIfNeeded = async () => {
        if (score <= 0 || (highScore && Number(highScore) >= score)) return

        await AsyncStorage.setItem(HIGH_SCORE, String(score))
        setHighScore(score)
    }

    const onGameOver = async () => {
        if (hitAudio) await hitAudio.sound.replayAsync()
        await setHighScoreIfNeeded()
        setIsRunning(false)
        setIsGameOver(true)
        setScore(0)
    }

    const onRestart = () => {
        setIsGameOver(false)
    }

    const onEvent = async (e: Event) => {
        switch (e.type) {
            case 'score':
                await onScore()
                break
            case 'press':
                await onPress()
                break
            case 'game_over':
                await onGameOver()
                break
        }
    }

    if (false === running && false === gameOver) return <Start onStart={onStart} highScore={highScore} />
    if (false === running && gameOver) return <GameOver onRestart={onRestart} />

    return (
        <GameEngine
            /** @ts-ignore */
            ref={engineRef}
            running={running}
            entities={Entities()}
            systems={[Physics]}
            onEvent={onEvent}
            style={styles.engine}>
            <Text style={styles.score}>{score}</Text>
        </GameEngine>
    )
}

export default Home
