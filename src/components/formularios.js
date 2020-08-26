import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet,  Dimensions
} from 'react-native';

import {Incon,  Container, Header, Content, Left,} from 'native-base'

//import de bibliotecas 

//import Pdf from 'react-native-pdf';

//classe formulario estatica e bugada!!
class Formulario extends Component {
  render() {
    //const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};

    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    return (
      
        <Text >Texto que será retornado da api.</Text>
              );
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
}
});

export default Formulario;