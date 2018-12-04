
import React , { Component }from "react";
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer , createDrawerNavigator } from "react-navigation";

//screens 
import { LoginComponent } from '../components/auth/login';
import { SignUpComponent } from '../components/auth/signup';
import { DashboardComponent } from '../components/appcomponents/dashboard';

// drawer screen 
import { SideBarTab } from '../components/sidebar/sidebar'

const stackNav = createStackNavigator({
    Login: { 
        screen: LoginComponent 
    },
    SignUp: { 
        screen: SignUpComponent 
    },
    Dashboard: { 
        screen: DashboardComponent 
    }
}, {
        initialRouteName: "Login",
        headerMode: "none"
});

const Drawer = createDrawerNavigator({
    Item1: { screen: stackNav }
},{
    contentComponent: SideBarTab,
    drawerWidth: Dimensions.get('window').width - 120,   
});

const MyApp = createAppContainer(Drawer);

export  class Routers extends Component {
    render(){
        return <MyApp />
    }
}