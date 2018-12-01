import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoState } from './data/state/todo.state';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    NewTodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TodoState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
