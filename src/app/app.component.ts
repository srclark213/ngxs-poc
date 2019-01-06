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
  constructor(private snapshotService: SnapshotService) { }

  loadPreviousSnapshot() {
    if (this.snapshotService.currentSnapshot === 0) return;

    this.snapshotService.resetStore(this.snapshotService.currentSnapshot - 1);
  }

  loadNextSnapshot() {
    if(this.snapshotService.currentSnapshot === this.snapshotService.snapshotHistory.length - 1) return;

    this.snapshotService.resetStore(this.snapshotService.currentSnapshot + 1);
  }

  showPrev = () => this.snapshotService.currentSnapshot > 0;
  showNext = () => this.snapshotService.currentSnapshot < this.snapshotService.snapshotHistory.length - 1;
}
