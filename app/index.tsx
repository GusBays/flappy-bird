import { BACKGROUND_COLOR } from '@/src/@constants/background-color'
import Home from '@/src/views/Home'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect } from 'react'
import { ImageBackground } from 'react-native'
import PRESS_START_2P from '../assets/fonts/PressStart2P-Regular.ttf'
import BACKGROUND from '../src/assets/images/background.png'

export default function Index() {
    useFonts({ PressStart2P: PRESS_START_2P })

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
