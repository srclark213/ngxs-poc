import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoState } from './data/state/todo.state';
import { HistoryService } from './shared/services/history.service';

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => function() {},
      deps: [HistoryService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
