import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-paper';

const Effect2 = () => {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [soma, setSoma] = useState(0);
  const [subtracao, setSubtracao] = useState(0);

  useEffect(() => {
    if (valor1 && valor2) {
      setSoma(parseInt(valor1)+parseInt(valor2));
      setSubtracao(parseInt(valor1)-parseInt(valor2));
    }
    else {
      setSoma('');
      setSubtracao('');
      setSoma(0);
      setSubtracao(0);
    }
  });

  const resetar = () => {
      setValor1('');
      setValor2('');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Digite dois valores inteiros:</Text>
        <View style={styles.viewTextInput}>
        <TextInput
            value={valor1}
            keyboardType="numeric"
            onChangeText={(valor) => setValor1(valor)}
            style={styles.textInput}
        />
        <TextInput
            value={valor2}
            keyboardType="numeric"
            onChangeText={(valor) => setValor2(valor)}
            style={styles.textInput}
        />
        </View>
        <Text style={styles.text}>Soma: {soma} </Text>
        <Text style={styles.text}>Subtração: {subtracao} </Text>
        <Button
            style={styles.buttons}
            mode="contained"
            onPress={resetar}
        >Resetar</Button>
    </View>
  );
}

export default Effect2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    padding: 4,
    margin: 2,
    width: 50,
  },
  viewTextInput: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
  },
  viewButton: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  buttons: {
    margin: 2,
  }
});
