import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';

const IdProof = ({navigation, route, hasCameraPermission}) => {
  const [idProofImage, setIdProofImage] = useState(null);

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
      cameraType: 'back', // Use back camera for ID proof
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setIdProofImage(uri);
      }
    });
  };

  const handleNext = () => {
    if (idProofImage) {
      navigation.navigate('Selfie', {...route.params, idProofImage});
    } else {
      Alert.alert('Please capture your ID proof');
    }
  };

  return (
    <View style={styles.container}>
      {idProofImage ? (
        <Image source={{uri: idProofImage}} style={styles.image} />
      ) : (
        <TouchableOpacity style={styles.captureButton} onPress={openCamera}>
          <Text style={{color:'white'}}>Capture ID Proof</Text>
        </TouchableOpacity>
        
      )}
      <View style={{marginTop: 20}}>
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default IdProof;

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
  captureButton:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,
    width:200,
    alignItems:'center'
  }
});
