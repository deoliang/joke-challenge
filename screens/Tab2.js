import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { global } from '../styles/global';

//defining the Tab 2 screen
const Tab2 = () => {
    return (
        <SafeAreaView style={global.container}>
            <View >
                <Text style={global.screenText}>Tab 2</Text>
            </View>
        </SafeAreaView>
    )
};

export default Tab2;
