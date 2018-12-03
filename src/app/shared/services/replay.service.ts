import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class ReplayService {

  constructor(private store: Store) { }

  resetStore(snapshot: any) {
    console.log('Resetting state to snapshot: ', snapshot);
    this.store.reset(snapshot);
  }
}
