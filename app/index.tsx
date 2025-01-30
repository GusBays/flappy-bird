import { BACKGROUND_COLOR } from '@/src/@constants/background-color'
import Home from '@/src/views/Home'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect } from 'react'
import { ImageBackground } from 'react-native'
import BACKGROUND from '../src/assets/background.png'

export default function Index() {
    const hideSplashScreen = useCallback(async () => await SplashScreen.hideAsync(), [])
    const hideSplashScreenWithDelay = useCallback(() => {
        const timeInMilliseconds = 1500
        setTimeout(hideSplashScreen, timeInMilliseconds)
    }, [])

    useEffect(hideSplashScreenWithDelay)

    return (
        <ImageBackground source={BACKGROUND} resizeMode="cover" style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
            <StatusBar style="auto" hidden />
            <Home />
        </ImageBackground>
    )
}
