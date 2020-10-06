import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, Linking
} from 'react-native';
//import MapView, {Marker} from "react-native-maps"

import Incon from  'react-native-vector-icons/Ionicons'
import msg from 'react-native-vector-icons/Entypo'
import tel from 'react-native-vector-icons/Foundation'
//import de bibliotecas e components

//classe contato estatica
class Contato extends Component {
    render() {
      return (
        <View style={styles.container}>
          
          <Text style= {styles.ceua}>CEUA</Text>
          <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>
         <View style={styles.localizacao}>
            <msg.Button name="location-pin" size={25} backgroundColor="powderblue">
              <Text style={styles.botaoText}>Localização</Text>
            </msg.Button>
          </View>

        <View style={styles.localizacao}>
          <tel.Button name="telephone" size={25} backgroundColor="powderblue" >
          <Text style={styles.botaoText}>Telefone</Text>
          </tel.Button>
        
        </View>
        
        </View>
      );
    }
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff'
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
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
    width: 300
    
    

  },
  ceua: {
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 12,
    
    paddingBottom: 50

  }
})
export default Contato;