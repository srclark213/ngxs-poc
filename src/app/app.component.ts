import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeTitle } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(state => state.app.title) title$: Observable<string>

  constructor(private store: Store) { }

  changeTitle() {
    this.store.dispatch(new ChangeTitle("Title Changed!"));
  }
}
