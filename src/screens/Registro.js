import React, {useState}from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {Item, Input, Text, Button } from "native-base";
import logoApp from "../assets/felizLogo.jpg";

export default function Registro(props) {
    const {setName}= props;
    const [namec, setNamec] = useState("");
    
    const onSubmit = () =>{
        setName(name);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source={logoApp} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input placeholder="Ingresa tu nombre completo"
                style={{color: "#fff"}} 
                placeholderTextColor="grey"
                value = {namec}
                onChange ={(e) => setNamec(e.nativeEvent.text)}
                />
            </Item>

            <Button style={styles.btnLogin} onPress={onSubmit}>
                <Text>Registrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 50,
        marginVertical: 100,
    },
    logo:{
        width:"100%",
        height: 200,
        marginBottom: 30,
    },
    btnLogin:{
        marginTop: 40,
        justifyContent:"center",
        backgroundColor: "#12CF8A"
    }
})