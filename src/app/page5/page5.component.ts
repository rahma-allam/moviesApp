import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  allMovies:any;

  constructor(_moviesService:MoviesService) {
    
    _moviesService.getMovies(5).subscribe(data=>
      this.allMovies = data.results)
   }

  ngOnInit() {
  }

}
