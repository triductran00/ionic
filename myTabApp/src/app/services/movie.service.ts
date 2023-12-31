import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getUpcomingMovies(page = 1): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/upcoming?api_key=${environment.apiKey}&page=${page}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movie/${id}/credits?api_key=${environment.apiKey}`);
  }
}
