import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4 - 10;

export default function Button({ text, colorStyle }) {
    const buttonStyle = [styles.button];
    const textStyle = [styles.text];

    if (colorStyle === 'primary') {
        buttonStyle.push(styles.primary);
        textStyle.push(styles.lightText);
    } else if (colorStyle === 'secondary') {
        buttonStyle.push(styles.secondary);
    }

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333333',
        height: Math.floor(buttonWidth - 10),
        width: Math.floor(buttonWidth),
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 5,
        margin: 3,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    },
    primary: {
        backgroundColor: '#8338EC',
    },
    secondary: {
        backgroundColor: '#FFBE0B',
    },
    lightText: {
        color: 'white',
    },
});
