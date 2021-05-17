import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';

import { TodoItem } from '../../models/todo.interface';
import { deleteTodo, updateTodo } from '../../redux/action/todo.action';

interface ItemProps {
    todo: TodoItem;
}

function TodoListItem ({ todo, update_todo, delete_todo }: ItemProps) {
    const setCompleted = (completed: boolean): void => {
        update_todo({
            ...todo,
            completed
        });
    };

    return (
        <View style={css.container}>
            {/* <CheckBox
                style={css.chk}
                value={todo.completed}
                onValueChange={setCompleted}
            /> */}
            <Text
                style={todo.completed ? {...css.text, ...css.completed} : {...css.text}}
                onPress={() => setCompleted(!todo.completed)}
            >{todo.name}</Text>
            <Button
                onPress={() => delete_todo(todo.id)}
                title="Remove"
                color="#f00"
            />
        </View>
    );
}

function mapDispatchToProps(dispatch: Function) {
    return {
        update_todo: (todo: TodoItem) => dispatch(updateTodo(todo)),
        delete_todo: (id: number) => dispatch(deleteTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoListItem);

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