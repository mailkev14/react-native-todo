import React, { useState } from "react";

import { TodoItem } from "../../models/todo.interface";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
    return (
        <>
            <AddTodo />
            <TodoList />
        </>
    );
}