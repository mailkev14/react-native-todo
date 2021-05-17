import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { AppState } from '../../models/state.interface';
import { TodoItem } from '../../models/todo.interface';

import TodoListItem from './TodoListItem';

interface ListProps {
    todos: TodoItem[];
}

function TodoList({ todos }: ListProps) {
    const list = todos.length > 0 ? (
        <View >
            <Text style={css.listTitle}>Todos for today</Text>
            <View>{
                todos.map((todo: TodoItem) => {
                    return (
                        <TodoListItem
                            todo={todo}
                            key={todo.id}
                        />
                    )
                })
            }</View>
        </View>
    ) : <Text style={css.na}>No Todos Available for today! {'\n'} Add some Todos to proceed!</Text>;

    return list;
}

function mapStateToProps(state: AppState) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);

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