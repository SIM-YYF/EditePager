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
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";

let scrollHeight = 0;
const currentheight = 0;

// create a component
class SettingTitleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      input_height: 45,
      target_input:null,
      fontSize: 14,
      backgroundStyle: '#00000000',
      inputs:["mb_default"]
    };
  }

  componentDidMount() {

    this.listener = RCTDeviceEventEmitter.addListener("updateStyle", (fs) => {
      console.log('--------------RCTDeviceEventEmitter')

      // 接受到通知后的处理
      // console.log(" ====== 接受对方传递的事件 =====", style)
      //this.props.refs.aaa.style
      // console.log("============== this.refs.mb_default.style. ===== ", this.refs.mb_default)
      // this.refs.mb_default.style.fontSize = 18
      let fsInt = parseInt(fs);
      let tempFontSize = 14;
      let tempBackGroundColor = "#00000000";
      if (fsInt === 0) {
        tempFontSize = 18;
      } else if (fsInt === 1) {
        tempFontSize = 12;
      } else if (fsInt === 2) {
        tempFontSize = 14;
      } else if (fsInt === 3) {
        //引用
        tempBackGroundColor = "#c0c0c0";
      } else {
        // 列表
      }
      console.log(tempFontSize,tempBackGroundColor)
      this.setState({
        fontSize: tempFontSize,
        backgroundStyle: tempBackGroundColor
      });
      // for (let i = 0; i < this.state.inputs.length; i++) {
      //   let element = this.state.inputs[i];
      //   console.log("========== element = ", element)
      //   for (let key in this.refs) {
      //     console.log("========== key = ", key)
      //       if(element === key){
      //         const {key} = this.refs
      //         console.log('=========== this', this)
      //         console.log("========== this.refs[key] = ", this.refs[key])
      //         // this.refs.key.style.fontSize = 18
      //         return;
      //       }
      //   }
      // }
    });
  }

  
 componentWillUnmount() {
  //  移除接受通知事件监听
  this.listener.remove();
 }
 _onChange(event) {
    // body
    this.setState({
      text: event.nativeEvent.text,
      input_height: event.nativeEvent.contentSize.height,
      target_input: event.nativeEvent.target
      
    });
  };

  _onContetSizeChange(event) {
    // event: {nativeEvent: {contentSize: { width: number, height: number}}}
    contentHeight = event.nativeEvent.contentSize.height;

    this.props._onChanageScrollViewHeight(contentHeight);
  }
  _chanageActionBoxState(state) {
   
    this.props.chanageActionBoxState(state, this.state.input_height);
  }

  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <TextInput
          style={[styles.inputs, { height: 45 }]}
          placeholder="标题"
          multiline={true}
          onFocus={this._chanageActionBoxState.bind(this, 100)}
        />

        <KeyboardAvoidingView behavior="padding">
          <TextInput
            ref="mb_default"
            placeholder="正文"
            placeholderTextColor="#c0c0c0"
            onChange={this._onChange.bind(this)}
            value={this.state.text}
            onContentSizeChange={this._onContetSizeChange.bind(this)}
            onFocus={this._chanageActionBoxState.bind(this, 101)}
            multiline={true}
            style={{
              width: Screen.screenWidth,
              height: Math.max(45, this.state.input_height),
              fontSize:this.state.fontSize,
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
