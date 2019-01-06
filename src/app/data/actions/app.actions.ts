import { BaseAction } from "./base.action";

export class LoadState extends BaseAction {
    public static readonly type: string = '[App] Load State';
    constructor(public payload: {snapshot: any}) { super() }
}