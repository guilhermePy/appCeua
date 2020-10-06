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
            
            <Text style= {styles.ceua}>CEUA</Text>
            <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>    
            
           
  
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
    //justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff'
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
    width: 160,
    height: 42, 
    backgroundColor: '#ff0000',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 10,
    marginLeft: 10

  },
  pickerComponent :{
      width: 300
  }, 
  projeto: {
      padding: 12,
      width: 350,
      marginTop: 10,
      backgroundColor: "powderblue", 
      borderRadius: 8
  },
  botaoProjeto: {
    width: 160,
    height: 42, 
    backgroundColor:"#00ff00",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
     borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
  },
  espc: {
      
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: 'center',
      padding: 8
      
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
export default ConfirmarParticipacao;
