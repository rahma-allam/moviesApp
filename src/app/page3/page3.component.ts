import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  allMovies:any;

  constructor(_moviesService:MoviesService) {
    
    _moviesService.getMovies(3).subscribe(data=>
      this.allMovies = data.results)
   }

  ngOnInit() {
  }

}
