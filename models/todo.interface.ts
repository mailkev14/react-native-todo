export interface TodoItem {
    id: number;
    name: string;
    completed: boolean;
}

export interface TodoCommonMethods {
    updateTodo: (todo: TodoItem) => void;
    deleteTodo: (id: number) => void;
}