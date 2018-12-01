import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateTodo } from 'src/app/data/actions/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  newItem: string;
  constructor(private store: Store) { }

  ngOnInit() {
  }

  submit() {
    if (!this.newItem || this.newItem.length < 1) return;
    this.store.dispatch(new CreateTodo(this.newItem));
    this.newItem = null;
  }

}
