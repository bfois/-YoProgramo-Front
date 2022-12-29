import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SexperienciaService {
  expUrl = "https://portfoliobef-bfois.koyeb.app/explab"
  // expUrl = "http://localhost:8080/explab"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expUrl + "/lista");
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expUrl + `/detail/${id}`);
  }

  public save(experiencia: Experiencia):Observable<Experiencia>{
    return this.httpClient.post<any>(this.expUrl + '/create',experiencia);
  }

  public update(id:number, experiencia:Experiencia): Observable<Experiencia>{
    return this.httpClient.put<any>(this.expUrl + `/update/${id}`,experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expUrl + `/delete/${id}`)
  }
}
