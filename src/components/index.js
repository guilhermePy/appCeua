import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet
} from 'react-native';

import {Incon,  Container, Header, Content, Left,} from 'native-base'

//import de bibliotecas 

class Index extends Component {
    render() {

      return (
        
         //texto que será buscado da API
        <View style= {styles.container}>
          <Text style= {styles.botaoText}>Texto que será retornado da api.</Text>
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
export default Index;