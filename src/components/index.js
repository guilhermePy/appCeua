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
          <Text style= {styles.botaoText}>CEUA</Text>
          <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>

          </View>

      
        
      );
    }
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, 
   // justifyContent: 'center', 
    alignItems: 'center',
    //backgroundColor: '#2c3e50'
    backgroundColor: '#fff'
  },
  botao: {
    width: 300,
    height: 42, 
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  botaoText: {
    marginTop: 10,
    justifyContent:'flex-start',
    fontSize: 30,
    fontWeight: 'bold',
    

  }, subtitulo: {
    fontSize: 12,
  }
})
export default Index;