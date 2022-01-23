# Joke-Challenge
A simple react native app built with expo and react navigation as a challenge for a company. There are bottom tab navigation consisting of 2 tabs, a drawer that can be opened from the left containing a button. The button sends a push notification to the device with a joke setup from a joke [api](https://sv443.net/jokeapi/v2/). Upon tapping the notifcation, the drawer closes, a new screen on a stack navigator will be opened consisting of the joke delivery from the same api.

## Usage
Install expo-cli on your machine
```
npm install -g expo-cli
```

Clone repository
```
git clone https://github.com/deoliang/joke-challenge.git
cd joke-challenge
```
Install dependencies with 
```
yarn 
```

Run developer tools locally with
```
expo start
```
Developer tools will be running at [http://localhost:19002](http://localhost:19002)

Download the Expo Go app for either iOS or android

[Link to the Android app](https://play.google.com/store/apps/details?id=host.exp.exponent)

[Link to the iOS app](https://apps.apple.com/app/expo-go/id982107779)

Scan the QR code in the developer tools and then would be able to run the app on your device. The push notification will only work on a device and not emulators.

## Assumptions and Disclaimers
- The app is focused on functionality with the outcome of a minimum viable product
- Some of the code for the notification is obtained from the notificaiton [documentation](https://docs.expo.dev/versions/latest/sdk/notifications/) of the expo website
- Although the instruction calls for using the [https://v2.jokeapi.dev/joke/Any](https://v2.jokeapi.dev/joke/Any) endpoint for the joke data, [https://v2.jokeapi.dev/joke/Any?type=twopart](https://v2.jokeapi.dev/joke/Any?type=twopart) was used instead to ensure the random joke has both a setup and delivery each time it is fetched
- Some android devices use gesture based navigation such that swiping from the left or right edges of the screen is equivalent to the back button, this might make opening the left drawer difficult
- No filter is applied for the endpoint, some of the jokes fetched from the api are quite explicit and offensive, discretion is advised