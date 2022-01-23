import React, { useState, useEffect, useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Pressable } from 'react-native'
import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { global } from '../styles/global';
import StackNav from './StackNav'

//settings to make sure notification will be shown when app is running in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Drawer = createDrawerNavigator();

//Custom button for drawer navigator that would fetch a joke on press
const JokeButton = (props) => {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [joke, setJoke] = useState({
    setup: "",
    delivery: ""
  })
  //code for notifications retrieved from https://docs.expo.dev/versions/latest/sdk/notifications/ 
  // --Starting here
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }
  //--Ending here

  //Method to send a push notification immediately after the joke has been fetched
  async function scheduleAJoke() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Joke Setup",
        body: joke.setup,
      },
      trigger: null,
    });
  }



  //useRef for skipping sending notification on initial render
  const initRender = useRef(false)
  useEffect(() => {
    if (!initRender.current) {
      initRender.current = true
    } else {
      //Upon clicking the notification, close the drawer and open new stacked page with joke delivery passed in
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        props.navigation.closeDrawer()
        props.navigation.navigate("Joke Delivery", { delivery: joke.delivery })
      });
      scheduleAJoke()
    }
  }, [joke]);

  //method for fetching a joke form the joke api with axios library
  const getAJoke = () => {
    axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart')
      .then((res) => {

        //destructring the relative fields of the response
        const { setup, delivery } = res.data
        setJoke({
          setup,
          delivery,
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <Pressable {...props} style={global.button} onPress={() => {
      getAJoke()
    }}>
      <Text style={global.buttonText}>Show me a joke</Text>
    </Pressable>
  );
}


//defining the Drawer Navigator 
const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }} drawerContent={(props) => <JokeButton {...props} />} >
      <Drawer.Screen component={StackNav} name="Root" />
    </Drawer.Navigator>
  )
};



export default DrawerNav;
