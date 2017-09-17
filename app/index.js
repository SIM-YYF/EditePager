//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  Keyboard
} from "react-native";
import ToolBarComponent from "./ToolBarComponent";
import CoverComponent from "./CoverComponent";
import SettingTitleComponent from "./SettingTitleComponent";
import Screen from "./ScreenFlex";
import RadiusButton from "./RadiusButton";
import dismissKeyboard from "dismissKeyboard";
export default class editPagerComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _show_action_box: null,
      _hider_keyborder: false
    };
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    
  }

  _keyboardDidHide () {
    this.setState({
      _show_action_box:102,
      
    })
  }


  chanageActionBoxState(isShow){
    console.log("-------------- ")
    this.setState({
      _show_action_box:isShow
    })
    console.log('this',this)
  }
  _renderActionBox() {
    console.log( "this.state._show_action_box =====" + this.state._show_action_box);
    let isHide = false
    if(this.state._show_action_box === null || this.state._show_action_box === 102 || this.state._show_action_box === 100){
      isHide = true
    }

    console.log('=============== isHide = ',  isHide,this.state._show_action_box);
    return (
      <KeyboardAvoidingView
       
        keyboardVerticalOffset={0}
        style={{ position: "absolute", bottom: 0}}
        behavior="position"

      >
      {
        isHide?null:
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            backgroundColor: "#c0c0c0",
            flexDirection: "row",
            width: Screen.screenWidth,
            padding: 10,

          }}
        >
          <TouchableHighlight>
            <Image
              style={{ marginLeft: 5, width: 25, height: 25 }}
              source={require("./images/add_image.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image
              style={{ marginLeft: 15, width: 25, height: 25 }}
              source={require("./images/font_style.png")}
            />
          </TouchableHighlight>

          <TouchableHighlight
            ref="_THL_hiderKeyBorder"
            style={{
              position: "absolute",
              right: 20,
              alignSelf: "center",
              padding: 10
            }}
            underlayColor="#c0c0c0"
            onPress={Keyboard.dismiss}
          >
            <Text>隐藏</Text>
          </TouchableHighlight>
        </View>
      }
        
      </KeyboardAvoidingView>
    );
  }
  scrollViewTo(e) {
    let target = e.nativeEvent.target;
    let scrollLength = 100;
    // this.refs.scroll.scrollTo(scrollLength);
    // this.refs.scroll.scrollTo(10);
  }

  _onChanageScrollViewHeight(scrollHeight) {
    console.log("--index.js-----scrollHeight = " + scrollHeight);
    this.refs.scroll.scrollTo({ y: scrollHeight });
  }

  render() {
    console.log('render')
    return (
      <View style={styles.container}>
        {/* 标题组件 */}
        <ToolBarComponent />

        <ScrollView
          keyboardDismissMode="none"
          ref="scroll"
          keyboardShouldPersistTaps={true}
          style={{ backgroundColor: "yellow" }}
        >
          <CoverComponent />

          <SettingTitleComponent
            _onChanageScrollViewHeight={this._onChanageScrollViewHeight.bind(
              this
            )}
            chanageActionBoxState = {this.chanageActionBoxState.bind(this)}
          />
        </ScrollView>

        {this._renderActionBox.bind(this)()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0C0C0"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
