import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me.model';

@Injectable({
  providedIn: 'root'
})
export class SAboutMeService {
   urlAbout= 'https://portfoliobef-bfois.koyeb.app/aboutMe/';
  // urlAbout= 'http://localhost:8080/aboutMe/';
  constructor(private http:HttpClient) { }

  public getPersona():Observable<AboutMe>{
    return this.http.get<AboutMe>(this.urlAbout+'/lista');
  }
  public detail(id: number): Observable<AboutMe>{
    return this.http.get<AboutMe>(this.urlAbout + `detail/${id}`);
  }
  public update(id:number, aboutMe:AboutMe): Observable<AboutMe>{
    return this.http.put<any>(this.urlAbout + `update/${id}`,aboutMe);
  }
}
