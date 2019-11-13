import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

 
  allMovies:string[];
  

  constructor(_moviesService:MoviesService) {
 
 
   _moviesService.getMovies(1).subscribe(
    data => this.allMovies=data.results
  
   ) 

   }


  ngOnInit() {

  /*  let btn =document.getElementsByClassName("btn");
    for(var i=0 ; i <btn.length ; i++)
    {
        btn[i].addEventListener("click" , function(e){
        let term=e.target.innerText;
        console.log(term);
        _moviesService.getMovies(term).subscribe(
          data => this.allMovies=data.results
        
         ) 
         
        })
    }*/     
  }

}
