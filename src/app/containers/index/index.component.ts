import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/movies-service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public Movies: any[]=[];
  constructor(private movieService: MoviesServiceService) { }

  ngOnInit(): void {
    this.movieService.GetMoviesList().subscribe(movies => {this.Movies = movies;});
  }
  procesaRefresh(mensaje) {
    this.movieService.GetMoviesList().subscribe(movies => {this.Movies = movies;});
  }
}
