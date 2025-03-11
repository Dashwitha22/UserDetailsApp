import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import UserDetails from './screens/userDetails';
import IdProof from './screens/idProof';
import Selfie from './screens/selfie';
import Final from './screens/final';
import {PermissionsAndroid, Platform} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  //Function to request camera permissions
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
          setHasCameraPermission(true);
        } else {
          console.log('Camera permission denied');
          setHasCameraPermission(false);
        }
      } catch (err) {
        console.warn(err);
        setHasCameraPermission(false);
      }
    } else {
      // iOS doesn't require runtime permissions for camera
      setHasCameraPermission(true);
    }
  };

  //Request permissions when the app starts
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User Details">
        <Stack.Screen name="User Details" component={UserDetails} />
        <Stack.Screen name="ID Proof">
          {props => (
            <IdProof {...props} hasCameraPermission={hasCameraPermission} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Selfie">
          {props => (
            <Selfie {...props} hasCameraPermission={hasCameraPermission} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
