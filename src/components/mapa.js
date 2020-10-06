import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, Linking
} from 'react-native';
import MapView, {Marker} from "react-native-maps"

import Incon from  'react-native-vector-icons/Ionicons'
import msg from 'react-native-vector-icons/Entypo'
import tel from 'react-native-vector-icons/Foundation'
//import de bibliotecas e components

//classe contato estatica
class Contato extends Component {
    render() {
      return (
        <View style={styles.container}>
         <MapView style={styles.map} initialRegion={{latitude: 27.7215},{longitude:85.32,latitudeDelta: 0.09, longitudeDelta:0.0921}}>

         </MapView>
        
        </View>
      );
    }
}

//estilos
const styles = StyleSheet.create({
  container: {
   height:400

  },
  map:{
      height: 400
  }
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