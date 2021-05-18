import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import { store } from './redux/store'

import Header from "./components/UI/Header";
import Todo from './components/Todo';

export default function App() {
    return (
        <Provider store={store}>
            <View style={css.container}>
                <Header />

                <ScrollView style={css.pageScroll}>
                    <View style={css.todoBody}>
                        <Todo />
                    </View>
                </ScrollView>

                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const css = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    },
    pageScroll: {
        height: '88%'
    },
    todoBody: {
        paddingTop: 20,
        paddingHorizontal: 20
    }
});
