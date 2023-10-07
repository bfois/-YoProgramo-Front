import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
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
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescripcionComponent,
    AboutmeComponent,
    FormacionComponent,
    ExperienciaComponent,
    NewExpComponent,
    EditexpComponent,
    EditComponent,
    NewComponent,
    EditDescComponent,
    EditAboutComponent,
    HeaderComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    LoginComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
