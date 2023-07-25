import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SeducacionService {
    eduUrl = "https://yoprogramo-back-production.up.railway.app/educacion"
    //eduUrl = "http://localhost:8080/educacion"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduUrl + "/lista");
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduUrl + `/detail/${id}`);
  }

  public save(educacion: Educacion):Observable<Educacion>{
    return this.httpClient.post<any>(this.eduUrl + '/create',educacion);
  }

  public update(id:number, educacion:Educacion): Observable<Educacion>{
    return this.httpClient.put<any>(this.eduUrl + `/update/${id}`,educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.eduUrl + `/delete/${id}`)
  }
}
