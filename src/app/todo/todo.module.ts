import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TodoComponent }]),
    FormsModule,
  ],
})
export class TodoModule {}
