import { Injectable } from '@angular/core';
import { Actions, Store, InitState, ofActionSuccessful } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { ActionStatus } from 'src/app/data/ActionStatus';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public lastSnapshot: any;

  private count: number = 0;
  private LOG_CHUNK_SIZE = 5;

  constructor(private actions$: Actions, private store: Store) { 
    
    this.actions$.pipe(filter(event => event.status === ActionStatus.SUCCESSFUL)).subscribe(this.handleAction.bind(this));

    this.actions$.pipe(ofActionSuccessful(InitState)).subscribe(() => this.lastSnapshot = this.store.snapshot()); // save initial state
  }

  handleAction(event: any) {
    this.count++;

    if (this.count >= this.LOG_CHUNK_SIZE) {
      var snapshot = this.store.snapshot();
      this.lastSnapshot = snapshot;
      this.count = 0;
    }
  }
}
