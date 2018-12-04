import React, { Component } from 'react';
import { View, Dimensions, Image, Text, ImageBackground, ScrollView } from 'react-native';

// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


//image
import profileImage from '../../assets/profileImage.jpg';
import trackBg from '../../assets/user-tracking.jpg';

let ScreenHeight = Dimensions.get("window").height;


export class SideBarTab extends Component {

    render() {
        return (
            <View >
                    <View style={sideMenuCls.container} >
                        <View style={sideMenuCls.profileBanner}>
                            <ImageBackground source={trackBg} style={{ flex: 1, width: null, height: null }}>
                                <View style={{ backgroundColor: '#097abe60', height: ScreenHeight / 4 }}>
                                    <View style={{ alignItems: 'flex-end', marginRight: 5 }} >
                                        <Icon name='close' color="#fff" size={24} />
                                    </View>
                                    <View style={sideMenuCls.profileImagePrnt}>
                                        <Image source={profileImage} style={sideMenuCls.profileImage} />
                                    </View>
                                    <View style={sideMenuCls.profileBannerText}>
                                        <Text style={sideMenuCls.profileImageText}> Atta Ur Rehman </Text>
                                    </View>

                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottomColor: '#fff', borderWidth: 2, height: 10 }}>
                            <Icon name="user" size={20} color="#fff" />
                            <Text style={{ color: '#fff', fontSize: 14, marginLeft: 20 }}> Profile </Text>
                        </View>
                    </View>
            </View>
        )
    }
}


const sideMenuCls = {
    container: {
        position: 'absolute',
        width: '100%',
        height: ScreenHeight,
        top: 0,
        backgroundColor: '#0a7abe',
        zIndex: 2,
        transition: '2s'

    },
    profileBanner: {
        backgroundColor: '#097abe',
        height: ScreenHeight / 4
    },
    profileImagePrnt: {
        false: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'


    },
    profileImage: {
        width: 80, height: 80,
        borderRadius: 50,
        borderColor: '#097abe',
        borderWidth: 3
    },
    profileBannerText: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImageText: {
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10,

    }
}