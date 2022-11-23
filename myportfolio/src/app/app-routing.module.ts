import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditexpComponent } from './components/experiencia/editexp.component';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:"newexp",component:NewExpComponent},
{path:"editexp/:id",component:EditexpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
