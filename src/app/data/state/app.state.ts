import { State, Action, StateContext } from "@ngxs/store";
import { LoadState } from "../actions/app.actions";
import { ReplayService } from "src/app/shared/services/replay.service";

@State({
    name: 'app'
})
export class AppState {

    constructor(private replayService: ReplayService) { }
    
    @Action(LoadState)
    loadState(_, action: LoadState) {
        this.replayService.resetStore(action.payload.snapshot);
    }
}