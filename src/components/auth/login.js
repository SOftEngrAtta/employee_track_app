import React, { Component } from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image , ToastAndroid} from "react-native";
import { Icon } from 'react-native-elements';
import { material, robotoWeights } from 'react-native-typography';
import { Item, Input, Button } from 'native-base';

//shared 
import { LoaderDisplay } from '../../shared/loader'

//css 
import { loginClass } from './authCls'

//images
import logo from '../../assets/logo.png';
import background from '../../assets/background.jpg';

export class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '', 
            message: null , 
            errorToastr : {
                message : '' , 
                timeduaration : 0 
            }, 
            showLoader : {
                loadingLoader : 'hide'
                
            }   
        }
    }

    componentDidMount(){
        this.props.navigation.closeDrawer()
    }

    handler(text, key) {
        let updateObj = Object.assign({}, this.state);
        updateObj['errorToastr']['message'] = '';
        updateObj['errorToastr']['timeduaration'] = 0;
        updateObj[key] = text;
        this.setState(updateObj)
    }

    loginUser() {
        if (this.state.email && this.state.password) {

            this._displayLoader('show');
            ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
            this.props.navigation.navigate('Dashboard');

        } else {
            ToastAndroid.show(`Please enter email and password`, ToastAndroid.SHORT);
        }
    }

    _displayLoader(key){
        let updateObj = Object.assign({},this.state);
        updateObj['showLoader']['loadingLoader'] = key ;
        this.setState(updateObj);
    }


    render() {
        return (
            <ImageBackground source={background} style={loginClass.backgroundImage} resizeMode="stretch">
                <KeyboardAvoidingView style={loginClass.container} >
                    <View >
                        <View style={loginClass.imgParnt}>
                            <Text style={loginClass.heading} style={material.title}>Employee Tracking</Text>
                            <Image style={loginClass.logoImage} source={logo} />
                        </View>
                        <Item>
                            <Input type="text" placeholder="Email" onChangeText={(text) => { this.handler(text, 'email') }} value={this.state.email} />
                        </Item>
                        <Item last>
                            <Input type="password" placeholder="Password" secureTextEntry={true} onChangeText={(text) => { this.handler(text, 'password') }} value={this.state.password} />
                        </Item>
                        <View style={loginClass.resetPassword}>
                            <Icon name="lock" size={10} color="#ccc" />
                            <Text style={{ fontSize: 6, margin: 5 }} style={robotoWeights.thin}>
                                Forgot Password
                    </Text>
                        </View>
                        <Button style={loginClass.lgnBtn} full success onPress={() => this.loginUser()}>
                            <Text style={loginClass.lgnBtn.Text}>Sign In</Text>
                        </Button>
                        <View style={loginClass.cretaeAccountPrnt} >
                            <Text style={loginClass.createAccountCls} >
                                Create Account
                    </Text>
                        </View>
                    </View>

                    <View style={loginClass.loaderPrnt}>
                        <LoaderDisplay loader={this.state.showLoader.loadingLoader} />
                        {
                            (this.state.showLoader.loadingLoader == 'show') ?
                                <Text style={loginClass.loaderText}>Loading...</Text> : null
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

