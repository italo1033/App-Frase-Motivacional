import React, { useEffect, useState } from "react";
const axios=require('axios')
import api from './components/api'
import { Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import I18n from "i18n-js";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [frase, setFrase] = useState();


  const gerarFrase = () =>{
    api
      .get("/advice")
      .then((response) => setFrase(response.data.slip))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <View style={{flex:1, backgroundColor:'#849ead', justifyContent:'center', alignItems:"center"}}>

    <ImageBackground
            style={{height:300, width:300}}
            source={require('./assets/sol.png')} >
            <TouchableOpacity
              style={{
                    marginLeft:65,
                    marginTop:65,
                    width:170,
                    height:170,
                    borderRadius:100, 
                    backgroundColor:'#ffae30', 
                    justifyContent:'center', 
                    alignItems:"center"}}
              onPress={gerarFrase}>
              <Text 
                style={{
                       textAlign:"center",
                       width:150, 
                       fontSize:20}}>
                 {frase?.advice}
               </Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
