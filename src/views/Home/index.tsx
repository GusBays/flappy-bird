import { ImageBackground } from 'react-native'
import BACKGROUND from '../../assets/background.png'
import Start from '../Start'
import { styles } from './styles'

const Home = () => {
    const onPressStart = () => {}

    return (
        <ImageBackground source={BACKGROUND} resizeMode="cover" style={styles.container}>
            <Start onPress={onPressStart} />
        </ImageBackground>
    )
}

export default Home
