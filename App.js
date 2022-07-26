import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';

export default function App() {
    const [input, setInput] = useState('');
    const [value, setValue] = useState(0);

    const onButtonClick = (char) => {
        setInput(input + char);
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.input}>
                <Text>{input}</Text>
            </View>
            <Keyboard onButtonClick={onButtonClick} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#202020',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
});
