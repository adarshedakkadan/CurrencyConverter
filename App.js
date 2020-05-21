import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         TextInput, 
         TouchableOpacity, 
         Alert, 
         TouchableWithoutFeedback,
         Keyboard } from 'react-native';

const currencyPerRuppee = {
  DOLLAR: 0.013246,
  EURO: 0.012035,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.14,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    }
  }

  buttonPressed = currency => {
    if(this.state.inputValue === ""){
      Alert.alert("Enter some value")
    } else {
      let result = parseFloat(this.state.inputValue) * currencyPerRuppee[currency];
      this.setState({ resultValue: result.toFixed(2).toString() });
    }
  }

  render() {
   return (
     <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style = {styles.wrapperView }>
          <View style = {styles.resultContainer}>
            <Text style = {styles.resultValue }>
              {this.state.resultValue}
            </Text>
          </View>
          <View style={styles.inputContatiner}> 
            <TextInput 
            style={ styles.input }
            selectionColor="#FFF"
            keyboardType = "numeric"
            placeholder = "Enter value"
            placeholderTextColor = "#FFF"
            value = { this.state.inputValue }
            onChangeText = { inputValue =>
              this.setState({ inputValue })
            }/> 
          </View>
          <View style={ styles.converterContainer }>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("DOLLAR") }>
                <Text style={ styles.converterButtonText }>DOLLAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("EURO") }>
                <Text style={ styles.converterButtonText }>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("POUND") }>
                <Text style={ styles.converterButtonText }>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("RUBEL") }>
                <Text style={ styles.converterButtonText }>RUBEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("AUSDOLLAR") }>
                <Text style={ styles.converterButtonText }>AUSDOLLAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("CANDOLLAR") }>
                <Text style={ styles.converterButtonText }>CANDOLLAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("YEN") }>
                <Text style={ styles.converterButtonText }>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("DINAR") }>
                <Text style={ styles.converterButtonText }>DINAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton} onPress =  { () => this.buttonPressed("BITCOIN") }>
                <Text style={ styles.converterButtonText }>BITCOIN</Text>
              </TouchableOpacity>
          </View>
        </View> 
      </SafeAreaView>
    </TouchableWithoutFeedback>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapperView: {
    marginTop: 30

  },
  resultContainer: {
    height: 50,
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  resultValue: {
    color: "#FFF",
    fontSize: 18, 
    fontWeight: "bold"
  },
  inputContatiner: {
    marginTop: 10,
    backgroundColor: "#0A79DE",
    height: 50,
    borderWidth: 2,
    borderColor: "#c1c1c1",
  },
  input:{
    height: 50,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 22,
    justifyContent: "center",
    textAlign: "center",
  },
  converterContainer: {
    flexDirection: "row",
    flexWrap:"wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderColor: 2,
  },
  converterButton: {
   height: 100,
   width: "33.3%",
   backgroundColor:"#0A79DE",
   justifyContent: "center",
   overflow: "hidden",
   alignItems: "center",
   borderColor: "#c1c1c1",
   borderWidth: 2
  },
  converterButtonText: {
    color:"#FFF",
    fontSize: 14,
    fontWeight: "bold",
  }
});
