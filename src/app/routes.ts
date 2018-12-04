import { Routes } from '@angular/router'
import { TodoContainerComponent } from "./containers/todo-container/todo-container.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component"

export const appRoutes: Routes = [
    { path: 'todos', component: TodoContainerComponent },
    { path: 'todos/:id', component: TodoItemComponent },
    { path: '', redirectTo: '/todos', pathMatch: 'full' }
]