import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {


  allMovies:any;
  constructor(_moviesService:MoviesService) {
    _moviesService.getMovies(2).subscribe(
      data => this.allMovies=data.results
    
     ) 
   }

  ngOnInit() {
  }

}
