import React, { useState } from "react";

import { TodoItem } from "../../models/todo.interface";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
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
        <>
            <AddTodo addTodo={addTodo} />

            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
}