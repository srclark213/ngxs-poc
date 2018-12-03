import { Injectable } from '@angular/core';
import { Actions, getActionTypeFromInstance } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { delay } from 'lodash';
import { ActionStatus } from 'src/app/data/ActionStatus';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private actionHistory: any[] = [];
  private LOG_CHUNK_SIZE = 5;

  constructor(private actions$: Actions) { 
    this.actions$.pipe(filter(event => event.status === ActionStatus.DISPATCHED)).subscribe(this.handleAction.bind(this));
  }

  handleAction(event: any) {
    var type = getActionTypeFromInstance(event.action);

    // create a new object that combines the action with its static type as a non static member
    var action = {type, ...event.action}; 
    this.actionHistory.push(action);

    this.tryPushLogs();
  }

  private tryPushLogs() {
    if (this.actionHistory.length >= this.LOG_CHUNK_SIZE) {
      // 500ms delay to simulate api call
      delay(() => {
        console.log('Saved action history: ', this.actionHistory);
        this.actionHistory = [];
      }, 500);
    }
  }
}