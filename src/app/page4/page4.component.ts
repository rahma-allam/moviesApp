import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  allMovies:any;

  constructor(_moviesService:MoviesService) {
    
    _moviesService.getMovies(4).subscribe(data=>
      this.allMovies = data.results)
   }


  ngOnInit() {
  }

}
