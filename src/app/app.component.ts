import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SnapshotService } from './shared/services/snapshot.service';
import { LoadState } from './data/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store, private snapshotService: SnapshotService) { }

  loadLastSnapshot() {
    this.store.dispatch(new LoadState({ snapshot: this.snapshotService.lastSnapshot }));
  }
}
