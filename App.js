import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import Incon from  'react-native-vector-icons/Ionicons'

//import de bibliotecas 

import Login from './src/components/login';
import Contato from './src/components/contato';
import Index from './src/components/index';
import Formulario from './src/components/formularios';
import Projetos from './src/components/meusProjetos';
import Confirmar from './src/components/confirmarParticipacao';
import DadosCadastrais from './src/components/dadosCadastrais';

//import de componentes de telas

import { createStackNavigator } from '@react-navigation/stack';

//import da pilha de telas

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const ContatosStack = createStackNavigator();
const FormularioStack = createStackNavigator();
const ProjetoStack = createStackNavigator();
const ConfirmarStack = createStackNavigator();
const DadosStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//criação de constantes utilizadas nas telas com stacknavigator

//constante da home
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={Index} options={{
      title:'Home',
      headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
    }}/>
  </HomeStack.Navigator>
);

//constante da tela de login
const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <LoginStack.Screen name="Login" component={Login} options={{
       headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
    }}/>
  </LoginStack.Navigator>
);

//constante da tela de login
const ContatosStackScreen = ({navigation}) => (
  <ContatosStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <ContatosStack.Screen name="Contatos" component={Contato} options={{
       headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
      
    }}/>
  </ContatosStack.Navigator>
);

//constante da tela de formularios
const FormularioStackScreen = ({navigation}) => (
  <FormularioStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <FormularioStack.Screen name="Formularios" component={Formulario} options={{
       headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
      
    }}/>
  </FormularioStack.Navigator>
);

//constante da tela de projetos
const ProjetoStackScreen = ({navigation}) => (
  <ProjetoStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <ProjetoStack.Screen name="Meus Projetos" component={Projetos} options={{
      title:'Meus Projetos',
      headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
    }}/>
  </ProjetoStack.Navigator>
);

//constante da tela de confirmar projetos
const ConfirmarStackScreen = ({navigation}) => (
  <ConfirmarStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <ConfirmarStack.Screen name="Confirmar Participação" component={Confirmar} options={{
       headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
    }}/>
  </ConfirmarStack.Navigator>
);

const DadosStackScreen = ({navigation}) => (
  <DadosStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <DadosStack.Screen name="Dados Cadastrais" component={DadosCadastrais} options={{
       headerLeft: () => (
        <Incon.Button name='ios-menu' size={25} 
        backgroundColor="#009387" onPress={() => navigation.openDrawer()
          }></Incon.Button>
      )
    }}/>
  </DadosStack.Navigator>
);

//const da tela inicial com o drawer navigator
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Contatos" component={ContatosStackScreen} />
        <Drawer.Screen name="Formularios" component={FormularioStackScreen} />
        <Drawer.Screen name="Meus Projetos" component={ProjetoStackScreen} />
        <Drawer.Screen name="Confirmar Participação" component={ConfirmarStackScreen} />
        <Drawer.Screen name="Dados Cadastrais" component={DadosStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;