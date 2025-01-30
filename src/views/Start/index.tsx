import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import LOGO from '../../assets/images/logo.png'
import PLAY from '../../assets/images/play.png'
import { styles } from './styles'
import { StartProps } from './types'

export const Start: React.FC<StartProps> = ({ onStart, highScore }) => {
    return (
        <View style={styles.container}>
            <Image source={LOGO} style={styles.logo} />
            <TouchableWithoutFeedback onPress={onStart}>
                <Image source={PLAY} style={styles.play} />
            </TouchableWithoutFeedback>
            {highScore && <Text style={styles.highScore}>Recorde pessoal: {highScore}</Text>}
        </View>
    )
}

export default Start
