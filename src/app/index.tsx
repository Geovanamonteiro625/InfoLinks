import {View,Text, StyleSheet} from "react-native";

export default function Index () {
    return (
        // Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota
        <View>
            <Text style={style.title}>eu sou o milior!!! </Text>
            <Text style={}> Eu sou a melhor</Text> 
            <Text style={style.title1}> O texto reative</Text>
            <Text style={style.title2}> 10/02</Text>
            <Text style={style.title3}> Geovana monteiro</Text>
            <Text style={ style.title4}> Erro na coluna </Text>
            <Text style={style.title5}> Garantia de um android</Text>
        </View>
     
    );  
}  
      
const style = StyleSheet.create({
    title:{
        color:"red",
        fontSize: 22,
    },
    title1: {
        color:"blue",
        fontSize:26
    },
    title2:{
     color:"red",
    fontSize:22,
    },

    title3:{
        color:"red",
        fonSize: 22
    },
    title4:{
        color:"red",
        title:
    }

  })
    
    