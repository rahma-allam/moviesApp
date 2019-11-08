import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(_moviesService:MoviesService) {
   _moviesService.getMovies().subscribe(
     data => this.allMovies=data.results
   )
   }

  allMovies:string[];
  term:any;
  
  ngOnInit() {
  }

}
