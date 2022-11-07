import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private FormBuilder:FormBuilder, private autenticacionService: AuthService, private ruta: Router) {
    this.form = this.FormBuilder.group({
      username:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
   
  }
 get Username(){
  return this.form.get("username");
 }
 get Password(){
  return this.form.get("password")
 }

 onEnviar(event: Event){
  event.preventDefault;
  this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{console.log("DATA: " + JSON.stringify(data));
  this.ruta.navigate([""]);
});
 
 }
}
