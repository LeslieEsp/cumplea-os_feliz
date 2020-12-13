import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Fecha_cum(props) {
    const {fecha_cum:{Name, fechac, horareg} } = props;
    
    

    const conditionalStyle={
        
        
    }
    return (
        <View style={[styles.container]}>
            {
                <View style={[styles.letterView]}> 
                    <Text style={styles.letter}>{Name}</Text>
                </View>
            }
            <View style={[styles.ViewDatos]}>
                <Text style={[styles.fechacum]}>{fechac}</Text>
                <Text style={[styles.time]}>{horareg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 5,
        alignItems:"center",
    },

    ViewDatos:{
        borderRadius: 15,
        minHeight: 35,
        minWidth:"40%",
        maxWidth: "80%",
    },
    letter:{
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
    },
    letterView:{
        height: 35,
        width: 35,
        borderRadius: 150,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,

    },
    fechacum:{
        padding: 5,
        paddingBottom: 25,
    },
    time:{
        fontSize:10,
        position:"absolute",
        bottom: 5,
    },
    timeRight:{
        right: 8,
        color:"#fff"
    },
    timeLeft:{
        left: 8,
        color: "grey",
    }
})
