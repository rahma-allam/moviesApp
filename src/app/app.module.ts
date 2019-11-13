import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchPipe } from './search.pipe';
import{HttpClientModule}from'@angular/common/http';
import { SeeMorePipe } from './see-more.pipe';
import{FormsModule} from'@angular/forms';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { PageNavComponent } from './page-nav/page-nav.component';





@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchPipe,
    SeeMorePipe,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    PageNavComponent
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
