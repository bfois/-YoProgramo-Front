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
import { EditProyecComponent } from './components/proyectos/edit-proyec.component';
import { NewProyecComponent } from './components/proyectos/new-proyec.component';
import { EditHysComponent } from './components/skills/edit-hys.component';
import { NewHysComponent } from './components/skills/new-hys.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:"newexp",component:NewExpComponent},
{path:"editexp/:id",component:EditexpComponent},
{path:"editedu/:id",component:EditComponent},
{path:"newedu",component:NewComponent},
{path:"edit/:id",component:EditDescComponent},
{path:"edit-about/:id",component:EditAboutComponent},
{path:"editProyec/:id",component:EditProyecComponent},
{path:"newProyec", component:NewProyecComponent},
{path:"edithys/:id",component:EditHysComponent},
{path:"newhys",component:NewHysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
