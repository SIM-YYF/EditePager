//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  findNodeHandle
} from "react-native";

// create a component
class MyClass extends Component {
  scrollViewTo(e) {
    let target = e.nativeEvent.target;
    let scrollLength = 100;
    if (target === findNodeHandle(this.refs.phoneInput)) {
      scrollLength = 10;
    }
    // this.refs.scroll.scrollTo(scrollLength);
    this.refs.scroll.scrollToOffset(10);
  }

//   componentDidMount() {
//     this.refs.scroll.scrollToEnd();
//   }

  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <ScrollView ref="scroll" style ={{backgroundColor: 'yellow'}}>
          <View
            onStartShouldSetResponderCapture={e => {
              const target = e.nativeEvent.target;
              if (
                target !== findNodeHandle(this.refs.phoneInput) &&
                target !== findNodeHandle(this.refs.codeInput)
              ) {
                this.refs.phoneInput.blur();
                this.refs.codeInput.blur();
              }
            }}
          >
            <TextInput
              ref="phoneInput"
              placeholder="正文"
              multiline = {true}
              placeholderTextColor="#c0c0c0"
              onFocus={this.scrollViewTo.bind(this)}
              onEndEditing={() => {
                this.refs.scroll.scrollTo(0);
              }}
              onSubmitEditing = {() =>{
                  alert('换行');
              }}
              style={{
                width: 300,
                height: 45,
                borderWidth: 1,
                marginTop: 20,
                marginLeft: 10,
                borderColor: "blue"
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
export default MyClass;
