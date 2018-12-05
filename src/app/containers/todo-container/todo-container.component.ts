import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/data/models/todo.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  @Select(s => s.todo.todos) public todos$: Observable<TodoModel[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
