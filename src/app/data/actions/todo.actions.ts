export class CreateTodo {
    public static readonly type: string = '[Todo] Add Todo';
    constructor(public payload: string) { }
}