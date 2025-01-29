import Home from '@/src/views/Home'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect } from 'react'

export default function Index() {
    const hideSplashScreen = useCallback(async () => await SplashScreen.hideAsync(), [])
    const hideSplashScreenWithDelay = useCallback(() => {
        const timeInMilliseconds = 3000
        setTimeout(hideSplashScreen, timeInMilliseconds)
    }, [])

    useEffect(hideSplashScreenWithDelay)

    return (
        /** @ts-ignore */
        <>
            <StatusBar style="auto" hidden />
            <Home />
        </>
    )
}
