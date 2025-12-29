import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Girl } from './girl';

@Injectable({
  providedIn: 'root'
})
export class GetGirlsService {
  private url = 'assets/model/girls.json';
  private girls$: Observable<Girl[]>;
  
  constructor(private http: HttpClient) {
    // Cache the result - shareReplay ensures:
    // 1. Only ONE HTTP call ever made
    // 2. New subscribers get the cached value immediately
     this.girls$ = this.http.get<Girl[]>(this.url).pipe(
      shareReplay(1)
    );
  }

  getGirls(): Observable<Girl[]> {
    return this.girls$;
  }
}