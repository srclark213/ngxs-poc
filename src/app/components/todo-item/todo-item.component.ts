import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from 'src/app/data/models/todo.model'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;

  constructor() { }

  ngOnInit() {
  }

}
