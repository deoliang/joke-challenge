import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { global } from '../styles/global';

//defining joke screen and displaying the delivery content passed in by the route prop
const Joke = ({ route }) => {
    return (
        <SafeAreaView style={global.container}>
            <View >
                <Text style={global.screenText}>{route.params.delivery}</Text>
            </View>
        </SafeAreaView>

    )
};

export default Joke;
