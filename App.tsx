import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { TodoItem } from "./models/todo.interface";

import Header from "./components/UI/Header";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

export default function App() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: TodoItem) => {
        setTodos((todos: TodoItem[]): TodoItem[] => {
            if ( !todos.find((t: TodoItem) => t.name.toLowerCase() === todo.name.toLowerCase()) ) {
                return [...todos, { ...todo }];
            } else {
                return todos;
            }
        });
    };

    const updateTodo = (todo: TodoItem) => {
        setTodos((todos: TodoItem[]): TodoItem[] => {
            const newTodos = todos.map((t: TodoItem): TodoItem => {
                if (t.id === todo.id) {
                    return { ...todo };
                } else {
                    return { ...t };
                }
            });

            return newTodos;
        });
    };

    const deleteTodo = (id: number) => {
        setTodos((todos: TodoItem[]) => todos.filter((todo: TodoItem) => todo.id !== id) );
    };

    return (
        <View style={css.container}>
            <Header />

            <ScrollView style={css.pageScroll}>
                <View style={css.todoBody}>
                    <AddTodo addTodo={addTodo} />

                    <TodoList
                        todos={todos}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                </View>
            </ScrollView>

            <StatusBar style="auto" />
        </View>
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
    },
    addTodo: {
        marginBottom: 20,
    },
});
