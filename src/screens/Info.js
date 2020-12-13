import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Header, Body, Title } from "native-base";
import Input from "../components/Input";
import Datos from "../components/Fecha_cum";
import moment from "moment";
import {map} from "lodash";
import firebase from "../utils/firebase";
import "firebase/database";

export default function Info(props) {
    const {Name} = props;
    const [datos, setDatos] = useState([]);
    const chatScrollRef = useRef( );

    useEffect(() => {
        chatScrollRef.current.scrollTo ({y: 1000000000000000000})
    }, [datos])

    useEffect(() => {
       const chat = firebase.database().ref("general");
       chat.on("value", (snapshot) =>{
           console.log(snapshot.val());
           setDatos(snapshot.val());
       });
    }, [])

    const registrodatos = (fechac) =>{
        const horareg = moment().utcOffset("-06:00").format("hh:mm a");
        firebase.database().ref("general").push({Name, fecha:fechac, horareg:"Null"})
    };
    

    return (
        <>
            <Header style={styles.header}>
                <Body>
                    <Title>Cumpleaños Feliz</Title>
                </Body>
            </Header>
            <View style={styles.content}>
                <ScrollView ref={chatScrollRef}>
                    {map (datos, (fechac, index) =>(
                        <Datos key={index} fechac={fechac} name={Name}/>
                    ))}
                    
                </ScrollView>
                <Input registrodatos={registrodatos} />
            </View>
        </>
    )
}