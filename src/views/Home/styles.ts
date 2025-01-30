import { BACKGROUND_COLOR } from '@/src/@constants/background-color'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    engine: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    }
})
