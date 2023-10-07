import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/aboutme/edit-about.component';
import { EditDescComponent } from './components/descripcion/edit-desc.component';
import { EditexpComponent } from './components/experiencia/editexp.component';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditComponent } from './components/formacion/edit.component';
import { NewComponent } from './components/formacion/new.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:"newexp",component:NewExpComponent},
{path:"editexp/:id",component:EditexpComponent},
{path:"editedu/:id",component:EditComponent},
{path:"newedu",component:NewComponent},
{path:"edit/:id",component:EditDescComponent},
{path:"edit-about/:id",component:EditAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
