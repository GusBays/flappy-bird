import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import GAME_OVER from '../../assets/images/game-over.png'
import { styles } from './styles'
import { GameOverProps } from './types'

const GameOver: React.FC<GameOverProps> = ({ onRestart }) => {
    useEffect(() => {
        const timeInMilliSeconds = 2500
        setTimeout(onRestart, timeInMilliSeconds)
    })

    return (
        <View style={styles.container}>
            <Image source={GAME_OVER} style={styles.image} />
        </View>
    )
}

export default GameOver
