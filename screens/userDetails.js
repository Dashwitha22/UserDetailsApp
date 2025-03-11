import {Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

const UserDetails = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleNext = () => {
    if (name && email && contact) {
      navigation.navigate('ID Proof', {name, email, contact});
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your contact number"
        placeholderTextColor="#999"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
});
