import { Dimensions } from 'react-native'

export function getWindowHeight(): number {
    return Dimensions.get('window').height
}

export function getWindowWidth(): number {
    return Dimensions.get('window').width
}
