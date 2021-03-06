import React, { Component } from 'react';
import {
  Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Picker
} from 'react-native';

import {Incon, Container, Header, Content, Left} from 'native-base'

//import de bibliotecas 


class Projetos extends Component {
  
 //estado padrao do picker select(seleção dos anos)
  state = {
      ano: ''
  }
  
  render() {
      return (
       //interação com meus projetos
      <View style={styles.container}>
            <Text style= {styles.ceua}>CEUA</Text>
          <Text style= {styles.subtitulo}>COMITÊ DE ÉTICA NO USO DE ANIMAIS</Text>

            <TouchableOpacity 
            style={styles.botao}
            >
                <Text styles={styles.botaoText}>Listar Projetos</Text>
            </TouchableOpacity>

            {/*seleção de do ano */}
            <Picker style={styles.pickerComponent}
            selectedValue={this.state.ano}
            onValueChange={
                (itemValor, itemIndex) =>
                    this.setState({
                        ano: itemValor
                    })
            }>
                <Picker.Item label="ANO:" value="" />
                <Picker.Item label="2016" value="2016" />
                <Picker.Item label="2017" value="2017" />
                <Picker.Item label="2018" value="2018" />
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2022" value="2022" />
            </Picker>
            {/*projetos retornados*/}
            <View style={styles.projeto}>
                
            <Text style={styles.botaoText}>Titulo</Text>
            <Text style={styles.botaoText}>Situação</Text>
            <View style={styles.espc2}>
              <View style={styles.espc}>
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Submeter</Text>
                </TouchableOpacity>
              
               
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Declarações</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.espc}>
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Rel. Final</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Rel. Parcial</Text>
                </TouchableOpacity>
                </View>
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
    borderRadius: 8
  }, 
  botao: {
    width: 300,
    height: 42, 
    backgroundColor: '#3498db',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 15

  },
  pickerComponent :{
      width: 300,
      backgroundColor: '#fff'
  }, 
  projeto: {
      width: 300,
      marginTop: 10,
      backgroundColor: "#fff"
  },
  botaoProjeto: {
    padding: 5,
    width: 150,
    height: 42, 
    backgroundColor: '#3498db',
    marginBottom: 10,
    margin: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center', 
    
  },
  espc: {
      flexDirection: "row",
      justifyContent: 'center',
      
      
  },
  espc2: {
   
    justifyContent: 'center', 
    padding: 5
  },
  ceua: {
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 12,
   
    paddingBottom: 50,
    

  }
  
 
})
export default Projetos;
