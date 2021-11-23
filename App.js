import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList ,Alert, Button ,TextInput,Image } from 'react-native';
import Header from './components/header';
import personalityDelatils from './localDb'
//import SearchPersonality from './components/SearchPersonality';

export default function App() {
  let image;
  const [name, setName] = useState('');

  const changeHandler = (val) => {
    setName(val);
  };
  const [personality, setPersonality] = useState(personalityDelatils);

  const submitHandler = (name) => {
    if(personality.find((name) => {return personality.name != name; }))
    {
      Alert.alert(name,'Not a famous personality!',[
        {text:'OK',onPress: ()=>console.log('alert')}
        ]);    
    } 
  };

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <TextInput 
          style={styles.input} 
          placeholder='Type name to search...'
          onChangeText={changeHandler} 
          value={name} 
        />
        <Button color='teal' onPress={() => submitHandler(name)} title='Search'/>
        </View>
        {personality.filter((person)=> name.toUpperCase() == person.name).map(             (person)=>{
          return(
            <View style={styles.result}>
              <Text style={styles.name}>{person.name}</Text>
              <Text style={styles.description}>{person.desc}</Text>            
              <Image  source={person.img} />
            </View>
          )
        })}
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f4',
  },
  content: {
    padding: 40,
  },
  name: {
    marginTop: 15,
    fontWeight:'bold'
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    fontStyle:'italic'
  },
  result:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
