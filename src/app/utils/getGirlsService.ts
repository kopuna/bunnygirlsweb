import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Girl } from './girl';

@Injectable({
  providedIn: 'root'
})
export class GetGirlsService {
  private url = 'assets/model/girls.json';

  constructor(private http: HttpClient) {}

  getGirls(): Observable<Girl[]> {
    return this.http.get<Girl[]>(this.url);
  }
}