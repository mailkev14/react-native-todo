import CheckBox from '@react-native-community/checkbox';
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

import { TodoItem, TodoCommonMethods } from '../../models/todo.interface';

interface ItemProps extends TodoCommonMethods {
    todo: TodoItem;
}

export default function TodoListItem ({ todo, updateTodo, deleteTodo }: ItemProps) {
    const setCompleted = (completed: boolean): void => {
        updateTodo({
            ...todo,
            completed
        });
    };

    return (
        <View style={css.container}>
            <CheckBox
                style={css.chk}
                value={todo.completed}
                onValueChange={setCompleted}
            />
            <Text style={todo.completed ? {...css.text, ...css.completed}: css.text}>{todo.name}</Text>
            <Button
                onPress={() => deleteTodo(todo.id)}
                title="Remove"
                color="#f00"
            />
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    chk: {
        width: 35
    },
    text: {
        // width: '60%',
        flexGrow: .965,
        marginRight: 10
    },
    completed: {
        textDecorationLine: 'line-through'
    }
});