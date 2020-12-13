import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Plataform  } from 'react-native';
import {Item, Input as InputNB, Icon } from "native-base";

export default function Input(props) {
    const {registrodatos} = props;
    const [fechac, setFechac] = useState("");

    const onSubmit = () =>{
        if(fechac.length > 0){
            registrodatos(fechac);
            setFechac("");
        }
    }


    
    return (
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InputNB 
                    placeholder="Fecha cumpleaños DD/MM/AA"
                    placeholderTextColor = "gray"
                    style={styles.input}
                    value={fechac}
                    onChange={(e) => setFechac(e.nativeEvent.text)} 
                />

                <TouchableOpacity onPress={onSubmit}>
                    <Icon name="send" type="FontAwesome" style={{color:"#fff"}}/>
                </TouchableOpacity>
            </Item>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3B7F66",
        paddingBottom: 0,
        paddingHorizontal: 20,
    },

    itemInput:{
        borderColor:"#3B7F66"
    },

    input:{
        color:"#fff"
    }
})
