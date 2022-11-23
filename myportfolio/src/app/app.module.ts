import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ObjectComponent } from './components/object/object.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterceptorService } from './service/interceptor.service';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditexpComponent } from './components/experiencia/editexp.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ObjectComponent,
    BienvenidaComponent,
    DescripcionComponent,
    AboutmeComponent,
    FormacionComponent,
    SkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    NewExpComponent,
    EditexpComponent,

  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
