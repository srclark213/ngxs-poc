import { TodoModel } from 'src/app/data/models/todo.model'

export class CreateTodo {
    public static readonly type: string = '[Todo] Add Todo';
    constructor(public payload: TodoModel) { }
}