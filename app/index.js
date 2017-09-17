//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import ToolBarComponent from "./ToolBarComponent";
import CoverComponent from "./CoverComponent";
import SettingTitleComponent from "./SettingTitleComponent";
import MainBodyComponet from "./MainBodyComponet";
import ActionBox from "./ActionBox";
export default class editPagerComponet extends Component {
  constructor(props) {
    super(props);

  }

  scrollViewTo(e){
    let target = e.nativeEvent.target;
    let scrollLength = 100;
    // this.refs.scroll.scrollTo(scrollLength);
    this.refs.scroll.scrollTo(10);
  }

  _onChanageScrollViewHeight(content){
    console.log(content);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* 标题组件 */}
        <ToolBarComponent />

        <ScrollView
          keyboardDismissMode="on-drag"
          ref="scroll"
          keyboardShouldPersistTaps={true}
        >
          <CoverComponent />

          <SettingTitleComponent  _onChanageScrollViewHeight = {this._onChanageScrollViewHeight.bind(this)} ref = 'SettingTitleComponent'/>


        </ScrollView>

        <KeyboardAvoidingView
          style={{ position: "absolute", bottom: 0 }}
          behavior="position"
          keyboardVerticalOffset={0}
        >
          <Image source={require("./images/ic_launcher.png")} />
        </KeyboardAvoidingView>
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
