import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements'


let _props ;
export class HeaderTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleName: 'Dashboard',
            notifications: 0,
            showMenu : false
        }
    }
    
    componentWillReceiveProps(nextprops) {
        
        const { title } = nextprops ;
        _props = nextprops.navigate;

        let updateobj = Object.assign({}, this.state);
        updateobj['title'] = title;
        this.setState(updateobj);
    }

  

    render() {
        return (

                <View>

                    <Header
                            backgroundColor="#e74003"
                            leftComponent={{ icon: 'menu', color: '#fff' , onPress: () => this.openDrawer() } }
                            centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                            rightComponent={
                                <View style={headerClass.notificationPrn}>
                                    <Icon name="notifications" size={25} color="#fff" />
                                    <Text style={headerClass.notification}> 20 </Text>
                                </View>
                            }
                    />
                </View>
        );
    }
}

const headerClass ={
    notificationPrn : {
        flex: 1, flexDirection: 'row',marginTop: 20
    },
    notification: {
        height: 18 , 
        borderWidth: 1,
        borderColor: '#e74003',
        borderRadius: 50 ,
        fontSize: 13,
        position: 'absolute',
        color: '#e74003',
        left:16, bottom: 10,
        backgroundColor: "#fff"
    }
}