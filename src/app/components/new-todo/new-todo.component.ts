import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CreateTodo } from 'src/app/data/actions/todo.actions';
import { TodoState } from 'src/app/data/state/todo.state';
import { TodoModel } from 'src/app/data/models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @Select(TodoState.todos) todos$: Observable<TodoModel[]>
  newId: number
  newItem: string;
  constructor(private store: Store) { 
    this.todos$.subscribe(todos => this.newId = todos.length+1)
  }

  ngOnInit() {
  }

  submit() {
    if (!this.newItem || this.newItem.length < 1) return;
    this.store.dispatch(new CreateTodo(new TodoModel(this.newId, this.newItem)))
    this.newItem = null;
  }
}
