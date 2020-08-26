import { createStackNavigator } from 'react-navigation-stack';
import Index from '../components/index';
import Login from '../components/login';
import Contato from '../components/contato';

const screens = {
    Login: {
        screen: Login, 
        navigationOptions: {
            title: 'Login'
        } 
    },
    
}

const DrawerStack = createStackNavigator(screens,{
  defaultNavigationOptions: {
      headerTintColor:'#444',
      headerStyle:{backgroundColor: '#mee',heigth: 60}
  }
});
export default Drawer; 