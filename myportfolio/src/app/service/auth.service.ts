import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAuth="http://localhost:8080/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 

    console.log("esta corriendo la auth")
    this.currentUserSubject =  new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser")||"{}"));
  }

  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.urlAuth,credenciales).pipe(map(data=>{

      sessionStorage.setItem("currentUser",JSON.stringify(data));
      this.currentUserSubject.next(data);

      return data;
    }))
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
