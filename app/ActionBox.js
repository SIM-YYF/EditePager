//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from "react-native";
import ScreenFlex from "./ScreenFlex";

// create a component
class ActionBox extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: "#00ff00",
            justifyContent: "flex-start",
            width: ScreenFlex.screenWidth,
            
          }
        ]}
      >
        <KeyboardAvoidingView behavior="position">
          <ScrollView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#ff0000"
              }}
            >
              <Image source={require("./images/ic_launcher.png")} />

              <Image source={require("./images/ic_launcher.png")} />

              <Image source={require("./images/ic_launcher.png")} />

              <Image
                source={{
                  uri: "http://facebook.github.io/react/img/logo_og.png"
                }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//make this component available to the app
export default ActionBox;
