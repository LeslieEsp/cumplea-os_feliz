import React, {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import{Container} from "native-base";
import Registro from "./src/screens/Registro";
import Info from "./src/screens/Info";

export default function App() {
  const [Name, setName] = useState(null);
  return (
    <Container style={styles.container}>
      {!Name ?(
        <Registro setName={setName}/>
      ):(
        <Info Name={Name}/>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#3B7F66"
  }
})