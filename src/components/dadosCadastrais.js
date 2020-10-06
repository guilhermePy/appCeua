import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, 
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
          <Text style= {styles.ceua}>CEUA</Text>
          <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>
          <View style={styles.projeto}>
              <Text  style={styles.aluno}>Aluno: </Text>
              <Text style={styles.aluno}>Curso:</Text>
              <Text style={styles.aluno}>Nome do projeto:</Text>
              <Text style={styles.aluno}>Coordenador:</Text>
              <Text style={styles.aluno}>Matricula: </Text>
              <Text style={styles.aluno}>e-mail:</Text>
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
   
    padding: 12
  },
  aluno: {
    marginBottom: 10
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
    color: '#fff',
    
   

  },
  projeto: {
    width: 350,
    marginTop: 10,
    backgroundColor: "powderblue", 
    borderRadius: 10,
    padding: 5
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