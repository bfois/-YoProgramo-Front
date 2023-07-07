import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
   // urlRedes = 'https://vague-kissie-bfois.koyeb.app/redes';
   urlRedes = 'http://localhost:8080/redes';
  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.urlRedes + "/lista");
  }

  public detail(id: number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.urlRedes + `/detail/${id}`);
  }

  public save(redes: Redes):Observable<Redes>{
    return this.httpClient.post<any>(this.urlRedes + '/create',redes);
  }

  public update(id:number, redes:Redes): Observable<Redes>{
    return this.httpClient.put<any>(this.urlRedes + `/update/${id}`,redes);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlRedes + `/delete/${id}`)
  }
}
