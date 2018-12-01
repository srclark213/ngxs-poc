import { State, Action, StateContext } from "@ngxs/store";
import { TodoStateModel } from "../models/todoState.model";
import { CreateTodo } from "../actions/todo.actions";

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        todos: ['default item']
    }
})
export class TodoState {
    @Action(CreateTodo)
    createTodo({patchState, getState}: StateContext<TodoStateModel>, action: CreateTodo) {
        patchState({
            todos: [...getState().todos, action.payload]
        });
    }
}