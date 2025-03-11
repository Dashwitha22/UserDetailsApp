# User Details App

This is a React Native app that allows users to enter their details, capture an ID proof image, take a selfie, and display all the data on the final screen.

## Features

- **User Details Screen**: Collects user's name, email, and contact number.
- **ID Proof Screen**: Captures an image of the user's ID proof using the device's back camera.
- **Selfie Screen**: Captures a selfie using the device's front camera.
- **Final Screen**: Displays all the entered data, including the ID proof and selfie images.

## Technologies Used

- **React Native**: For building the mobile app.
- **React Navigation**: For navigation between screens.
- **react-native-image-picker**: For capturing images from the camera.
- **PermissionsAndroid**: For requesting camera permissions on Android.

## Steps to Develop the App

1. **Set Up the Project**:
   - Created a new React Native project using `npx @react-native-community/cli@latest init UserDetails`.
   - Installed required dependencies: `react-native-image-picker`, `@react-navigation/native`, `@react-navigation/stack`.

2. **Added Permissions**:
   - Added camera and storage permissions to `AndroidManifest.xml`.
   - Requested runtime permissions for the camera on Android using `PermissionsAndroid`.

3. **Created Screens**:
   - **UserDetailsScreen**: Collects user details (name, email, contact number).
   - **IDProofScreen**: Captures an image of the ID proof using the back camera.
   - **SelfieScreen**: Captures a selfie using the front camera.
   - **FinalScreen**: Displays all the collected data.

4. **Handled Navigation**:
   - Used `@react-navigation/stack` to navigate between screens.
   - Passed data between screens using `route.params`.

5. **Tested the App**:
   - Tested the app on a physical Android device.
   - Verified that all features work as expected.

## How to Run the Project

1. Install dependencies:
    - npm install

2. Run the app on Android:
    - npm run android