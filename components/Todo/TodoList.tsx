import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TodoItem, TodoCommonMethods } from '../../models/todo.interface';

import TodoListItem from './TodoListItem';

interface ListProps extends TodoCommonMethods {
    todos: TodoItem[];
}

export default function TodoList({ todos, updateTodo, deleteTodo }: ListProps) {
    const list = todos.length > 0 ? (
        <View >
            <Text style={css.listTitle}>Todos for today</Text>
            <View>{
                todos.map((todo: TodoItem) => {
                    return (
                        <TodoListItem
                            todo={todo}
                            updateTodo={updateTodo}
                            deleteTodo={deleteTodo}
                            key={todo.id}
                        />
                    )
                })
            }</View>
        </View>
    ) : <Text style={css.na}>No Todos Available for today! {'\n'} Add some Todos to proceed!</Text>;

    return list;
}

const css = StyleSheet.create({
    listTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    na: {
        textAlign: 'center'
    }
});