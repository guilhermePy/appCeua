import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Index from '../components/index';
import Login from '../components/login';
import Contato from '../components/contato';
import { Container, Content,  Body, Header, Incon } from 'native-base';

import { StyleSheet, Image } from 'react-native';

const CustomDrawerContentComponent = (props) =>{
    <Container>
        <Header>
            <Body>
            
            </Body>
        </Header>
    </Container>
}

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Index,
    },
    Login:{
        screen: Login,
    }, 
    Contato: {
        screen: Contato
    }
})

const styles = StyleSheet.create({
    drawerImage: {
        height:150,
        width:150, 
        borderRadius:75
    }
})

export default createAppContainer(RootDrawerNavigator);