import { getRandomInt } from '@/src/utils/random'
import { getWindowHeight, getWindowWidth } from '@/src/utils/window'
import { PipeConfig, PipesConfig } from './types'

export function getPipesConfig(addToPosX: number = 0): PipesConfig {
    const windowHeigh = getWindowHeight()
    const windowWidth = getWindowWidth()

    const x = windowWidth + addToPosX
    const size = { height: 450, width: 55 }
    const yPosTop = -getRandomInt(220, windowHeigh - 900)

    const top: PipeConfig = {
        position: { x, y: yPosTop },
        size
    }

    const bottom: PipeConfig = {
        position: { x, y: windowHeigh - 100 + yPosTop },
        size
    }

    return { top, bottom }
}
