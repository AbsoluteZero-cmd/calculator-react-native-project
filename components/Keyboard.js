import { Text, Pressable, ToastAndroid, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Row from './Row';
import Button from './Button';

export default function Keyboard() {
    const onPress = () => {
        ToastAndroid.show('pressed', ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Row>
                <Button text='C' colorStyle='primary' />
                <Button text='Del' colorStyle='primary' />
                <Button text='%' colorStyle='primary' />
                <Button text='/' colorStyle='primary' />
            </Row>
            <Row>
                <Button text='1' colorStyle='secondary' />
                <Button text='2' colorStyle='secondary' />
                <Button text='3' colorStyle='secondary' />
                <Button text='*' colorStyle='primary' />
            </Row>
            <Row>
                <Button text='4' colorStyle='secondary' />
                <Button text='5' colorStyle='secondary' />
                <Button text='6' colorStyle='secondary' />
                <Button text='-' colorStyle='primary' />
            </Row>
            <Row>
                <Button text='7' colorStyle='secondary' />
                <Button text='8' colorStyle='secondary' />
                <Button text='9' colorStyle='secondary' />
                <Button text='+' colorStyle='primary' />
            </Row>
            <Row>
                <Button text=',' colorStyle='secondary' />
                <Button text='0' colorStyle='secondary' />
                <Button text='.' colorStyle='secondary' />
                <Button text='=' colorStyle='primary' />
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
