import { AnyAction } from "redux";
import { TodoItem } from "./todo.interface";

export interface TodoAction extends AnyAction {
    type: string;
    payload: TodoItem | number;
}