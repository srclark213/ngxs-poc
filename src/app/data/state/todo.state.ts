import { State, Action, StateContext, Selector } from "@ngxs/store";
import { TodoStateModel } from "../models/todoState.model";
import { CreateTodo } from "../actions/todo.actions";
import { TodoModel } from "../models/todo.model";

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        todos: [new TodoModel(1, 'default item')]
    }
})
export class TodoState {
    @Action(CreateTodo)
    createTodo({patchState, getState}: StateContext<TodoStateModel>, action: CreateTodo) {
        patchState({
            todos: [...getState().todos, action.payload]
        });
    }

    @Selector()
    static todos(state: TodoStateModel) {
        return state.todos
    }

    @Selector()
    static getTodoById(state: TodoStateModel) {
        return (id: number) => state.todos.filter((todo) => todo.id === id)[0]
    }
}