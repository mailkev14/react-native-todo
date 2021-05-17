import { TodoItem } from "../../models/todo.interface";
import { TodoAction } from '../../models/action.interface';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/todo.action";

const INITIAL_STATE: TodoItem[] = [];

export default function todoReducer (todos = INITIAL_STATE, action: TodoAction): TodoItem[] {
    switch (action.type) {
        case ADD_TODO: {
            const todo = (action.payload as TodoItem);
            if ( !todos.find((t: TodoItem) => t.name.toLowerCase() === todo.name.toLowerCase()) ) {
                return [...todos, { ...todo }];
            } else {
                return [...todos];
            }
        }
        break;

        case UPDATE_TODO: {
            const todo = action.payload as TodoItem;

            const newTodos = todos.map((t: TodoItem): TodoItem => {
                if (t.id === todo.id) {
                    return { ...todo };
                } else {
                    return { ...t };
                }
            });

            return newTodos;
        }
        break;

        case DELETE_TODO: {
            const id = action.payload;

            const filteredTodos = todos.filter((todo: TodoItem) => todo.id !== id)
            
            return filteredTodos;
        }
        break;
    }

    return todos;
}