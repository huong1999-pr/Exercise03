import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Exercise1Component } from './exercise1/exercise1.component';


const routes: Routes = [
  
   { path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]},
    { path: 'exercise1', component: Exercise1Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
