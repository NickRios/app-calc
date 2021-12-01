import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Input, TouchableButton } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as math from 'mathjs'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [expression,setExpression] = React.useState<string>("55 + 55");
  const [result,setResult] = React.useState<number>(0);
  

  function evaluateResult ( expressao : string){
    if(expressao == "")  setResult(0); 
   
    setResult(math.evaluate(expressao as math.MathExpression));
  } 

  function handlePressButton(){
    evaluateResult(expression);
  }


  return (
    <View style={styles.container}>
      <Input style={styles.border} onChangeText={text => setExpression(text)}><Text>{expression}</Text></Input>
      <Text style={styles.resultText} >{result}</Text>
      <TouchableButton style={styles.button} onPress={handlePressButton}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableButton>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    borderColor:'#FFF',
    borderWidth:1,
    width:'40%',
    height:'20%',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  textField:{
    borderWidth:1,
    width:'20%',
    borderRadius:4,
    backgroundColor:'#FFFFFF',
    fontSize:20,
  },

  textButton:{
    fontSize:30,
    
  },
  
  resultText:{
    fontSize:30,
    margin:10,
  },

  border:{
    borderColor:'#FFFFFF',
    borderWidth:4,
    borderRadius:4,
    padding:5,
    width:'50%',
  }

});
