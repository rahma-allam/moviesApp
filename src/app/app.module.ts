import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchPipe } from './search.pipe';
import{HttpClientModule}from'@angular/common/http';
import { SeeMorePipe } from './see-more.pipe';
import{FormsModule} from'@angular/forms'





@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchPipe,
    SeeMorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
