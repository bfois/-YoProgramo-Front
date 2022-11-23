import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';




@Injectable({
  providedIn: 'root'
})


export class AuthService {
  urlAuth="http://localhost:8080/api/auth/";
  
  constructor(private http:HttpClient) { }

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
      return this.http.post<any>(this.urlAuth + 'register', nuevoUsuario);
    }
   
    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
      return this.http.post<JwtDto>(this.urlAuth + 'login', loginUsuario)
    }
  
  }

