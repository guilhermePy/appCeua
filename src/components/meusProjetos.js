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
            <View style={styles.espc}>
                <TouchableOpacity 
                style={styles.botaoProjeto}
                >
                    <Text styles={styles.botaoText}>Ver projeto</Text>
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
    width: 300,
    height: 42, 
    backgroundColor: '#3498db',
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
      width: 300,
      backgroundColor: '#fff'
  }, 
  projeto: {
      width: 300,
      marginTop: 10,
      backgroundColor: "#fff"
  },
  botaoProjeto: {
    width: 200,
    height: 42, 
    backgroundColor: '#3498db',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  espc: {
      alignItems: 'center'
  }
 
})
export default Projetos;
