import { StyleSheet } from 'react-native'

export const styles = (x: number, y: number, width: number, height: number) =>
    StyleSheet.create({
        bird: {
            position: 'absolute',
            left: x,
            top: y,
            width,
            height,
            resizeMode: 'contain'
        }
    })
