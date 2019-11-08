import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { 
   
  }


  getMovies():Observable<any> {
    return this._httpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=cd36356cef5d43fc8ff737481eaaa03b&language=en-US&page=");
  }


}
