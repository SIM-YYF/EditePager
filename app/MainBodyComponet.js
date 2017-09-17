//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
  TouchableHighlight
} from "react-native";
import ScreenFlex from "./ScreenFlex";

import Screen from "./ScreenFlex";
// create a component
class MainBodyComponet extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(20);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 10
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 20
    }).start();
  };
  scrollViewTo(e) {
    let target = e.nativeEvent.target;
    let scrollLength = 100;
    if (target === React.findNodeHandle(this.refs.codeInput)) {
      scrollLength = 160;
    }
    this.refs.scroll.scrollTo(scrollLength);
  }
  jumpToNextPage() {
    alert("msg");
  }
  cardNumberTextChanged() {}
  render() {
    return (
      <View style={styles.container}>
        　<ScrollView ref="scroll" keyboardShouldPersistTaps='always'>
          　<View
            onStartShouldSetResponderCapture={e => {
              const target = e.nativeEvent.target;
              if (
                target !== React.findNodeHandle(this.refs.phoneInput) &&
                target !== React.findNodeHandle(this.refs.codeInput)
              ) {
                this.refs.phoneInput.blur();
                this.refs.codeInput.blur();
              }
            }}
          >
            <TextInput
              ref="phoneInput"
              onFocus={this.scrollViewTo.bind(this)}
              onEndEditing={() => {
                this.refs.scroll.scrollTo(0);
              }}
              onChange={this.cardNumberTextChanged.bind(this)}
              placeholder="请输入预留手机号"
              placeholderTextColor="#481A5C"
            />

            <TextInput
              ref="codeInput"
              onFocus={this.scrollViewTo.bind(this)}
              onEndEditing={() => {
                this.refs.scroll.scrollTo(0);
              }}
              placeholder="输入验证码"
              placeholderTextColor="#999"
              onChange={this.cardNumberTextChanged}
              keyboardType="number-pad"
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default MainBodyComponet;
