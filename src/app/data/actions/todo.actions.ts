import { TodoModel } from 'src/app/data/models/todo.model'
import { BaseAction } from './base.action';

export class CreateTodo extends BaseAction {
    public static readonly type: string = '[Todo] Add Todo';
    constructor(public payload: TodoModel) { super(); }
}