import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HyS } from '../model/hy-s';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  urlhys = 'http://localhost:8080/skills';
  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<HyS[]>{
    return this.httpClient.get<HyS[]>(this.urlhys + "/lista");
  }

  public detail(id: number): Observable<HyS>{
    return this.httpClient.get<HyS>(this.urlhys + `/detail/${id}`);
  }

  public save(hys: HyS):Observable<any>{
    return this.httpClient.post<any>(this.urlhys + '/create',hys);
  }

  public update(id:number, hys:HyS): Observable<any>{
    return this.httpClient.put<any>(this.urlhys + `/update/${id}`,hys);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlhys + `/delete/${id}`)
  }
}
