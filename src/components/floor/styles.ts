import { StyleSheet } from 'react-native'

export const styles = (x: number, y: number, width: number, height: number, color: string) =>
    StyleSheet.create({
        floor: {
            position: 'absolute',
            left: x,
            top: y,
            width,
            height,
            backgroundColor: color
        }
    })
