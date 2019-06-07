/**
* @author Megha <megha.h@photoninfotech.net>
* @version 
* @summary My Harvest Screen for the application.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, 
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" for composing the form and for getting the form value in
* and object. also it simplifies form validation.
*/

import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, Platform, Dimensions, View, ScrollView, Image, TouchableOpacity, UIManager, LayoutAnimation, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";
import Toolbar from '../../../components/Toolbar';

import HarvestDetailsStyles from "../../MyHarvest/templates/MyHarvestStyles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

/**
* @class HarvestDetails
* @extends Component
* @summary Represents HarvestDetails class.
* @description This is a MembershipDetails class. It extands react Component class for using the functions comes along with it.
*/
export class HarvestDetails extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images
    */
    constructor(props) {
        super(props);
        this.state = {
            facebookToken: false,

            expanded1: false,
            expanded2: false,
            entries: [
                { key: 1, content: "Trash Assessment Standard:  0.00 " },
                { key: 2, content: "Screening Assessment Standard: $534.13" },
                { key: 3, content: "Domestic Assessment: 0.00" },
                { key: 4, content: "Color Assessment No Offests: $380.41" },
            ]
        };
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();

    }

    toggle = (key) => {
        if (key === 'expanded1') {
            this.setState({
                expanded1: !this.state.expanded1
            }, () => {
                this._animate();
            });
        } else {
            this.setState({
                expanded2: !this.state.expanded2
            }, () => {
                this._animate();
            });
        }
    }



    /**
        * @function onCloseClick
        * This method calls when user clicks on icon close
        */
    onCloseClick = () => {
        navigateBack();
    }

    render() {
        // const {isLoggedin}=this.props;
        return (
            <ScrollView style={HarvestDetailsStyles.mainView}>
                <Toolbar
                    onPressNavigateBack={this.props.onPressNavigateBack}
                    title={this.props.toolbarTitle} />
                <View style={HarvestDetailsStyles.pendingView}>
                    <Text style={HarvestDetailsStyles.pendingText}>PENDING</Text>
                </View>
                <ImageBackground source={require('../../../assets/fruits.png')} style={HarvestDetailsStyles.ImageStyle} >
                    <View>
                        <Image source={require('../../../assets/fullScreenImage.png')} style={{ width: 30, height: 30, marginLeft: 340, marginTop: 10 }} ></Image>
                    </View>
                </ImageBackground>
                <View style={HarvestDetailsStyles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded1}
                        onPress={() => this.toggle("expanded1")}>
                        <View style={HarvestDetailsStyles.subViewForMainList}>
                            <View style={HarvestDetailsStyles.loyaltyMemberGroupView}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../../assets/dollar.png')} style={{ width: 24, height: 21, marginTop: 14, marginLeft: 10 }} />
                                </View>
                                <View style={{ flex: 7, flexDirection: "row" }}>
                                    <Text style={HarvestDetailsStyles.loyaltyMemberGroup}>Total Assessment: </Text>
                                    <Text style={HarvestDetailsStyles.loyaltyMemberText}>$914.54</Text>
                                </View>
                                <View style={HarvestDetailsStyles.expandIconView}>
                                    <Icon name={this.state.expanded1 ? "chevron-up" : "chevron-down"} size={35} color='black' style={HarvestDetailsStyles.expandIcon} />
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                    {this.state.expanded1 &&
                        <View style={HarvestDetailsStyles.flatListView}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.entries}
                                keyExtractor={(item, index) => index.toString()}
                                ref={(ref) => {
                                    this.flatListRef = ref;
                                }}
                                ItemSeparatorComponent={() => <View style={HarvestDetailsStyles.subListSeperator} />}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={HarvestDetailsStyles.mainViewforSubListView}>
                                            <View style={HarvestDetailsStyles.imageforSubContentView}>
                                                {Platform.OS === "ios" ? (
                                                    <Image style={HarvestDetailsStyles.imageforSubContent} source={item.card} />
                                                ) : (
                                                        <Image style={HarvestDetailsStyles.imageforSubContent} source={item.androidCard} />
                                                    )
                                                }
                                            </View>
                                            <View style={HarvestDetailsStyles.subTextContentView}>
                                                <Text style={HarvestDetailsStyles.subTextContent}>{item.content} </Text>

                                            </View>
                                        </View>
                                    );
                                }} />
                        </View>
                    }
                </View>
                <View style={HarvestDetailsStyles.listviewStyles}>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Delivery #: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>2442</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Date & Time In: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>10/19/18 at 11:32am</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Contact #: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>0705075</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Facility: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>106</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Bed: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>B6</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Delivery Weight: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>25,410lb</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Total Barrels: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>20</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Tacy: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>40</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% > 1/2: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>100</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Unc: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>0.84</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Total Trash: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>4.68</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Poor: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>11.30</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Usable: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>84.55</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Dry Trash: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>1.40</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>% Moist: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>3.28</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Firm: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>600</Text>
                    </View>
                    <View style={HarvestDetailsStyles.whiteRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Fresh Process:</Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>P</Text>
                    </View>
                    <View style={HarvestDetailsStyles.grayRowStyles}>
                        <Text style={HarvestDetailsStyles.textStyle}>Var: </Text>
                        <Text style={HarvestDetailsStyles.darkTextStyle}>ST</Text>
                    </View>
                </View>
                <View style={HarvestDetailsStyles.ButtonViewStyles}>
                    <TouchableOpacity>
                        <View style={HarvestDetailsStyles.PreviousButtonView}>
                            <Text style={HarvestDetailsStyles.PreviousText}>Previous</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={HarvestDetailsStyles.NextButtonView}>
                            <Text style={HarvestDetailsStyles.PreviousText}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}





/**
* Converting redux state to props for the HarvestDetails component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
    // isLoggedin: state.auth.isLoggedin,
});

/**
* Converting functions to props for the HarvestDetails component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(HarvestDetails);