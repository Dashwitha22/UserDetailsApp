import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';

const Selfie = ({navigation, route, hasCameraPermission}) => {
  const [selfieImage, setSelfieImage] = useState(null);

  const openCamera = async () => {
    if (!hasCameraPermission) {
      Alert.alert(
        'Permission Denied',
        'You need to grant camera permission to use this feature.',
      );
      return;
    }

    const options = {
      mediaType: 'photo',
      cameraType: 'front', //use front camera for selfie
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelfieImage(uri);
      }
    });
  };

  const handleNext = () => {
    if (selfieImage) {
      navigation.navigate('Final', {...route.params, selfieImage});
    } else {
      Alert.alert('Please capture your selfie');
    }
  };

  return (
    <View style={styles.container}>
      {selfieImage ? (
        <Image source={{uri: selfieImage}} style={styles.image} />
      ) : (
        <TouchableOpacity style={styles.captureButton} onPress={openCamera}>
          <Text style={{color: 'white'}}>Capture Selfie</Text>
        </TouchableOpacity>
      )}
      <View style={{marginTop: 20}}>
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default Selfie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
});
