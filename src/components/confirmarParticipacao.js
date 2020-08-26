import React, { Component } from 'react';
import {
  Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Picker
} from 'react-native';

import {Incon, Container, Header, Content, Left} from 'native-base'

//import de bibliotecas 

//classe confirmar participaçao 
class ConfirmarParticipacao extends Component {
  
 

  
  render() {
      return (
       //projetos pendentes
      <View style={styles.container}>
            
                
            
           
  
            <View style={styles.projeto}>
                
            <Text style={styles.botaoText}>Titulo</Text>
            <Text style={styles.botaoText}>Situação</Text>
            <Text style={styles.botaoText}>Membros do projeto</Text>

            <View style={styles.espc}>
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Deferir</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.botao}
               >
                    <Text styles={styles.botaoText}>Indeferir</Text>
                </TouchableOpacity>
            </View>
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
    width: 150,
    height: 42, 
    backgroundColor: '#ff0000',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'

  },
  pickerComponent :{
      width: 300
  }, 
  projeto: {
      width: 350,
      marginTop: 10,
      backgroundColor: "#fff"
  },
  botaoProjeto: {
    width: 150,
    height: 42, 
    backgroundColor:"#00ff00",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
  },
  espc: {
      
      flexDirection: "row",
      justifyContent: 'center'
      
  }
 
})
export default ConfirmarParticipacao;
