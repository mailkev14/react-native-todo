import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const css = StyleSheet.create({
    header: {
        backgroundColor: '#61dafb',
        paddingTop: 50,
        paddingHorizontal: 30,
        height: 95
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
});

export default function Header () {
   return (
       <View style={css.header}>
           <Text style={css.text}>Simple Todo Application</Text>
       </View>
   ); 
}