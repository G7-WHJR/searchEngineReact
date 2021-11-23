import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function SearchPersonality({ submitHandler }) {
  const [name, setName] = useState('');

  const changeHandler = (val) => {
    setName(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Type name to search...'
        onChangeText={changeHandler} 
        value={name} 
      />
      <Button color='teal' onPress={() => submitHandler(name)} title='Search' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});