//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import Screen from "./ScreenFlex";
import ActionBox from "./ActionBox";

let scrollHeight = 0;
let currentheight = 0;

// create a component
class SettingTitleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      input_height: 45
    };
  }

  _onChange = event => {
    // body
    this.setState({
      text: event.nativeEvent.text,

      input_height: event.nativeEvent.contentSize.height
    });
  };

  _onContetSizeChange(event) {
    // event: {nativeEvent: {contentSize: { width: number, height: number}}}
    contentHeight = event.nativeEvent.contentSize.height;

    console.log(
      " --------_onContetSizeChange () - > contentHeight = " + contentHeight
    );

    // scrollHeight = contentHeight - currentheight;

    this.props._onChanageScrollViewHeight(contentHeight);

    // currentheight = contentHeight;
    // console.log(" ========== currentheight = " + currentheight);
    // console.log(" ========== scrollHeight = " + scrollHeight);
  }
  _chanageActionBoxState(state){
    console.log("----------- _onLayout ----------")
    console.log("state ===== " + state);
    this.props.chanageActionBoxState(state)
  }


  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <TextInput
          style={[styles.inputs, { height: 45 }]}
          placeholder="标题"
          multiline={true}
          onFocus = {this._chanageActionBoxState.bind(this,100)}
         
          
        />

        <KeyboardAvoidingView behavior="padding">
          <TextInput
            placeholder="正文"
            placeholderTextColor="#c0c0c0"
            onChange={this._onChange}
            
            value={this.state.text}
            onContentSizeChange={this._onContetSizeChange.bind(this)}
            onFocus = {this._chanageActionBoxState.bind(this,101)}
            multiline={true}
            style={{
              width: Screen.screenWidth,
              height: Math.max(45, this.state.input_height),
              borderWidth: 0,
              marginTop: 20,
              marginLeft: 10,
              borderColor: "#00000000"
            }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Screen.screenWidth,

    alignItems: "center",
    backgroundColor: "red"
  },

  inputs: {
    borderWidth: 1,
    margin: 5,

    borderBottomColor: "#fff",
    borderLeftColor: "#00000000",
    borderTopColor: "#00000000",
    borderRightColor: "#00000000"
  }
});

//make this component available to the app
export default SettingTitleComponent;
