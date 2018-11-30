import { State, StateContext, Action } from "@ngxs/store";

export interface AppStateModel {
    title: string;
}

export class ChangeTitle {
    static readonly type = '[App] Change Title';

    constructor(public newTitle: string) { }
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        title: 'NGXS Proof of Concept'
    }
})
export class AppState {
    @Action(ChangeTitle)
    changeTitle(ctx : StateContext<AppStateModel>, action: ChangeTitle) {
        ctx.patchState({title: action.newTitle});
    }
}