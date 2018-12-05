import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from 'src/app/data/models/todo.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from 'src/app/data/state/todo.state';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  todo: TodoModel;
  todo$: Observable<TodoModel>;
  @Select(TodoState.getTodoById) todoByIdFn$: Observable<(id: number) => TodoModel>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.todo$ = this.todoByIdFn$.pipe(map(fn => fn(+this.route.snapshot.params['id'])));
    this.todo$.subscribe(val => this.todo = val);
  }

}
