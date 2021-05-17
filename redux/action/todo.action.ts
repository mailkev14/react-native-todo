import { TodoItem } from "../../models/todo.interface";
import { TodoAction } from '../../models/action.interface';

export const ADD_TODO = 'TODO/ADD_TODO';
export const UPDATE_TODO = 'TODO/UPDATE_TODO';
export const DELETE_TODO = 'TODO/DELETE_TODO';

export function addTodo (todo: TodoItem): TodoAction {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export function updateTodo (todo: TodoItem): TodoAction {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}

export function deleteTodo (id: number): TodoAction {
    return {
        type: DELETE_TODO,
        payload: id
    }
}