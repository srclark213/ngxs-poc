import { Injectable } from '@angular/core';
import { Actions, Store, ofActionSuccessful, InitState } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { ActionStatus } from 'src/app/data/ActionStatus';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public snapshotHistory: any[] = [];
  public currentSnapshot: number = -1;

  constructor(private actions$: Actions, private store: Store) {

    this.actions$.pipe(filter(event => event.status === ActionStatus.SUCCESSFUL && event.action.appAction)).subscribe(this.saveSnapshot.bind(this));
    this.actions$.pipe(ofActionSuccessful(InitState)).subscribe(this.saveSnapshot.bind(this)); // save initial state
  }

  saveSnapshot(event: any) {
    const snapshot = this.store.snapshot();

    this.snapshotHistory.push(snapshot);
    this.currentSnapshot = this.snapshotHistory.length - 1;
  }

  resetStore(index: number) {
    this.store.reset(this.snapshotHistory[index]);
    this.currentSnapshot = index;
  }
}
