import React, { Component } from 'react';
import {
  Alert, View, Text, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

import {Incon, Container, Header, Content, Left} from 'native-base'
//import de components

//classe login
class Login extends Component {

  //função provisoria que será utilizada no login
  clicou = () => {
    Alert.alert("Login", "vc logou");
  }
  
  render() {
      return (
       //formulario de login
      <View style={styles.container}>
        
       
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail."
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha."
          />
          <TouchableOpacity 
          style={styles.botao}
          onPress={()=>{this.clicou()}}>
            <Text styles={styles.botaoText}>Login</Text>
          </TouchableOpacity>
  
        
          </View>
      );
    }
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  input: {
    marginTop: 10, 
    padding: 10,
    width: 300, 
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  }, 
  botao: {
    width: 300,
    height: 42, 
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'

  }
})
export default Login;
