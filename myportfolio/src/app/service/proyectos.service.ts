import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  urlProyec = "http://localhost:8080/proyectos";
  constructor(private httpClient : HttpClient) {
   }
   public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.urlProyec + "/lista");
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.urlProyec + `detail/${id}`);
  }

  public save(proyectos: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.urlProyec + 'create',proyectos);
  }

  public update(id:number, proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.urlProyec + `update/${id}`,proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlProyec + `delete/${id}`)
  }
}
