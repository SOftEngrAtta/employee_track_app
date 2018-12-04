import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { material, robotoWeights } from 'react-native-typography';


// css 
import { dashboardClass } from './appComponentCls'

//images
import background from '../../assets/background.jpg';
import usersview from '../../assets/users.png';
import groups from '../../assets/groups.png';
import report from '../../assets/report.png';
import tasks from '../../assets/tasks.jpg';

export class DashboardComponent extends Component {

  
    render() {
        return (
            <ImageBackground source={background} style={dashboardClass.backgroundImage} resizeMode="stretch">
                    <View>
                        {/* <HeaderTab title="Dashboard"/> */}
                        <Header
                            backgroundColor="#e74003"
                            leftComponent={{ icon: 'menu', color: '#fff', backgroundColor: '#e74003' , onPress: () => this.props.navigation.openDrawer() } }
                            centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                            rightComponent={
                                <View style={headerClass.notificationPrn}>
                                    <Icon name="notifications" size={25} color="#fff" />
                                    <Text style={headerClass.notification}> 20 </Text>
                                </View>
                            }
                        />
                        <View style={dashboardClass.parntBody}>
                            <View style={dashboardClass.viewBody}>
                                <View style={dashboardClass.flexRow}>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={usersview} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                View Status
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 50 </Text>
                                        </View>
                                    </View>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={groups} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Groups
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 10 </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={dashboardClass.viewBody}>
                                <View style={dashboardClass.flexRow}>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={report} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Reports
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 15 </Text>
                                        </View>
                                    </View>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={tasks} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Tasks
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 20 </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
            </ImageBackground>
        )
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