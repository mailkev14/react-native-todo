import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { TodoItem } from '../../models/todo.interface';
import { addTodo } from '../../redux/action/todo.action';

interface AddProps {
    add_todo: (todo: TodoItem) => void
};

function AddTodo({ add_todo }: AddProps) {
    const [task, setTask] = useState('');

    const invalidTodo = () => {
        return task.trim().length === 0;
    };
    
    const createTodo = () => {
        add_todo({
            id: Math.round(Math.random() * 1000000000),
            name: task,
            completed: false
        });
        
        setTask('');
    };

    return (
        <View style={css.container}>
            <Text style={css.heading}>Add Todo</Text>

            <View style={{...css.group, ...css.lastGroup}}>
                <Text style={css.groupTitle}>Task</Text>
                <TextInput value={task} onChangeText={setTask} />
            </View>

            <Button disabled={invalidTodo()} onPress={createTodo} title="Add" />
        </View>
    );
}

function mapDispatchToProps (dispatch: Function) {
    return {
        add_todo: (todo: TodoItem) => dispatch(addTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);

const css = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#20232a',
        borderRadius: 5
    },
    heading: {
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    group: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#20232a'
    },
    lastGroup: {
        marginBottom: 20
    },
    groupTitle: {
        marginRight: 10
    }
});