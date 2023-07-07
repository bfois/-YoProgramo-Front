import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ObjectComponent } from './components/object/object.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterceptorService } from './service/interceptor.service';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditexpComponent } from './components/experiencia/editexp.component';
import { EditComponent } from './components/formacion/edit.component';
import { NewComponent } from './components/formacion/new.component';
import { EditDescComponent } from './components/descripcion/edit-desc.component';
import { EditAboutComponent } from './components/aboutme/edit-about.component';
import { EditProyecComponent } from './components/proyectos/edit-proyec.component';
import { NewProyecComponent } from './components/proyectos/new-proyec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ObjectComponent,
    BienvenidaComponent,
    DescripcionComponent,
    AboutmeComponent,
    FormacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    NewExpComponent,
    EditexpComponent,
    EditComponent,
    NewComponent,
    EditDescComponent,
    EditAboutComponent,
    EditProyecComponent,
    NewProyecComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
