import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  public GetMoviesList():Observable<any>{
    return this.http.get(`${environment.api}/movies`)
  }
  public DeleteMovie(id:any):Observable<any>{
    return this.http.delete(`${environment.api}/movies/${id}`)
  }
  public AddNewMovie(data:any):Observable<any>{
    return this.http.post(`${environment.api}/movies/`, data)
  }
  public GetMovieById(id:any):Observable<any>{
    return this.http.get(`${environment.api}/movies/${id}`)
  }
  public UpdateMovieById(id:any, data:any):Observable<any>{
    return this.http.put(`${environment.api}/movies/${id}`, data)
  }
}
