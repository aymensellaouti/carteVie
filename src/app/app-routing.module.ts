import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { DetailComponent } from './cv/detail/detail.component';
import { FrontLayoutComponent } from './pages/front-layout/front-layout.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { Nf404Component } from './pages/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
          { path: ':id', component: DetailComponent },
        ],
      },
      { path: 'todo', component: TodoComponent },
      { path: 'color/:myColor', component: ColorComponent },
      { path: 'word', component: MiniWordComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent,
      },
    ],
  },
  { path: '**', component: Nf404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
