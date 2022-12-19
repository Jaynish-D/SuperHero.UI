import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http : HttpClient) { }
  private url = "SuperHero";
  public getSuperHeros() : Observable<SuperHero[]>
  {
   return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
