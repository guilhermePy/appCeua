import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, TouchableOpacity, StyleSheet,  Dimensions
} from 'react-native';

import {Incon,  Container, Header, Content, Left,} from 'native-base'

import PDFReader from 'rn-pdf-reader-js';
import * as FileSystem from 'expo-file-system';
import download from  'react-native-vector-icons/Feather'

//import de bibliotecas 

//import Pdf from 'react-native-pdf';

//classe formulario estatica e bugada!!
class Formulario extends Component {
  render() {
    return (
      //<TouchableOpacity onPress={() => Linking.openURL('www.somesite.com/manual.pdf')}>
       // <Text>See pdf</Text>
     // </TouchableOpacity>
      //<PDFReader
        //source={{
         //uri: 'https://americalatina.dint.fgv.br/sites/americalatina.dint.fgv.br/files/teste33.pdf',
       // }}
      ///>
      <View style={styles.container}>
        <Text style= {styles.ceua}>CEUA</Text>
        <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>
        <View style={styles.localizacao}>
            <download.Button name="download" size={25} backgroundColor="powderblue">
              <Text style={styles.botaoText}>Projeto 1</Text>
            </download.Button>
          </View>
          <View style={styles.localizacao}>
            <download.Button name="download" size={25} backgroundColor="powderblue">
              <Text style={styles.botaoText}>Projeto 2</Text>
            </download.Button>
          </View>
          <View style={styles.localizacao}>
            <download.Button name="download" size={25} backgroundColor="powderblue">
              <Text style={styles.botaoText}>Projeto 2</Text>
            </download.Button>
          </View>
      </View>
      
    )
  }
}


//estilos
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
},
pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}, 
ceua: {
  paddingTop: 40,
  fontSize: 30,
  fontWeight: 'bold',

},
subtitulo: {
  fontSize: 12,
  
  paddingBottom: 50

},
botaoText: {
  marginTop: 10,
  justifyContent:'flex-start',
  fontWeight: 'bold',
  color: "#fff",
  width: 300

},
localizacao:{
  flexDirection:'row',
  padding: 10,
  alignItems: 'center'
},
});

export default Formulario;