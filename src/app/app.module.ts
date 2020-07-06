import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './containers/index/index.component';
import { NavBarComponent } from './presentational/nav-bar/nav-bar.component';
import { TableMoviesComponent } from './presentational/table-movies/table-movies.component';
import { NewMovieComponent } from './containers/new-movie/new-movie.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ng2-tooltip-directive';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { EditMovieComponent } from './containers/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    TableMoviesComponent,
    NewMovieComponent,
    EditMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TooltipModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
