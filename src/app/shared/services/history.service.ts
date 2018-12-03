import { Injectable } from '@angular/core';
import { Actions } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { delay } from 'lodash';

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
    var type = this.getActionType(event.action);
    
    // create a new object that combines the action with its static type as a non static member
    var action = {type, ...event.action}; 
    this.actionHistory.push(action);

    this.tryPushLogs();
  }

  private tryPushLogs() {
    if (this.actionHistory.length >= this.LOG_CHUNK_SIZE) {
      // 500ms delay to simulate api call
      delay(() => {
        console.log(this.actionHistory);
        this.actionHistory = [];
      }, 500);
    }
  }

  private getActionType(action: any): string {
    var baseType = Object.getPrototypeOf(action);
    return baseType.constructor.type;
  }
}

enum ActionStatus {
  DISPATCHED = 'DISPATCHED',
  SUCCESSFUL = 'SUCCESSFUL'
}