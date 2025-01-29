import { Image, TouchableWithoutFeedback, View } from 'react-native'
import LOGO from '../../assets/logo.png'
import PLAY from '../../assets/play.png'
import { styles } from './styles'
import { StartProps } from './types'

export const Start: React.FC<StartProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Image source={LOGO} style={styles.logo} />
            <TouchableWithoutFeedback onPress={onPress}>
                <Image source={PLAY} style={styles.play} />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Start
