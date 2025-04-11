import {View,Text, StyleSheet} from "react-native";

export default function Index () {
    return (
        // Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota
        <View style={styles.container}>
            <Text style={styles.title}>eu sou o milior!!! </Text>
            <Text style={styles.title}> Eu sou a melhor</Text> 
            <Text style={styles.title1}> O texto reative</Text>
            <Text style={styles.title2}> 10/02</Text>
            <Text style={styles.title3}> Geovana monteiro</Text>
            <Text style={ styles.title4}> Erro na coluna </Text>
            <Text style={styles.title5}> Garantia de um android</Text>
        </View>
    
    );  
}  
      
const styles = StyleSheet.create({
    container:{
        flex:1, // considera toda a area util da tela para os componentes
        justifyContent: "center", //justifica(ajusta) todos os elementos no centro da
        alignItems: "center", //Alinha todos os elementos centro da tela 
        flexDirection:"row", //Organiza todos os elementos dentro doflex box em linha (esquerda)
    },
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
        fontSize:22,
    },
    title4:{
        color:"red",
        fontSize:22,
    },

    title5:{
        color:"red",
        fontSize:22, 
    },
  })
    
    