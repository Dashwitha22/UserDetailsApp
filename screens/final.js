import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Final = ({route}) => {

  const{name, email, contact, idProofImage, selfieImage} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Contact: {contact}</Text>
      <Text style={styles.label}>ID Proof: </Text>
      <Image source={{uri: idProofImage}} style={styles.image}/>
      <Text style={styles.label}>Selfie:</Text>
      <Image source={{uri: selfieImage}} style={styles.image}/>
    </View>
  )
}

export default Final

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  label: {
    fontSize:16,
    marginBottom:10,
  },
  image:{
    width:200,
    height:200,
    marginBottom:20,
  },
});