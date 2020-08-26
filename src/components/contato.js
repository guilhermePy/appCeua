import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, Linking
} from 'react-native';

import Incon from  'react-native-vector-icons/Ionicons'
import msg from 'react-native-vector-icons/Entypo'
import tel from 'react-native-vector-icons/Foundation'
//import de bibliotecas e components

//classe contato estatica
class Contato extends Component {
    render() {
      return (
        <View style={styles.container}>
         <View style={styles.localizacao}>
            <msg.Button name="location-pin" size={25} backgroundColor="#2c3e50" />
            <Text style={styles.botaoText}>localização</Text>
          </View>
        <View style={styles.localizacao}>
        <tel.Button name="telephone" size={25} backgroundColor="#2c3e50" />
        <Text style={styles.botaoText}>Telefone</Text>
        </View>
        
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
  localizacao:{
    flexDirection:'row',
    padding: 10,
    alignItems: 'center'
  },
  contato:{
    marginTop: 10
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
export default Contato;