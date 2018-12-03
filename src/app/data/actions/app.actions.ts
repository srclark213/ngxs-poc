export class LoadState {
    public static readonly type: string = '[App] Load State';
    constructor(public payload: {snapshot: any}) { }
}