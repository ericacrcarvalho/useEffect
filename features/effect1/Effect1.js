import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Effect1 = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const add = () => {
        setCount(count+1);
    };

    const subtract = () => {
        setCount(count > 0 ? count-1 : 0);
    };

    const random = () => {
        setValue(Math.floor(Math.random() * 100));
    }; 

    useEffect( () => {
      console.log("useEffect count");
      setValue(Math.floor(Math.random() * 100));
    }, [count]);

    useEffect( () => {
      console.log("useEffect value");
    }, [value]);

    //console.log("render");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {count}</Text>
            <View style={styles.viewButtons}>
            <Button
                style={styles.buttons}
                mode="contained"
                onPress={add}
            >+</Button>
            <Button
                style={styles.buttons}
                mode="contained"
                onPress={subtract}
            >-</Button>
            </View>
            <Text style={styles.text}>Número aleatório: {value}</Text>
            <Button
                style={styles.buttons}
                mode="contained"
                onPress={random}
            >Gerar</Button>
        </View>
    );
}

export default Effect1;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 4,
    },
    viewButtons: {
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 4,
    },
    buttons: {
      margin: 1,
    }
  });
