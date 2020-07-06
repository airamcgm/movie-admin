import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {headersStatus} from 'src/app/headerStatus';
import Swal from 'sweetalert2';
import { MoviesServiceService } from 'src/app/movies-service.service';

@Component({
  selector: 'app-table-movies',
  templateUrl: './table-movies.component.html',
  styleUrls: ['./table-movies.component.scss']
})
export class TableMoviesComponent implements OnInit {
  @Input() Movies: any;
  @Output() onRefresh = new EventEmitter<boolean>();
  @Output() onUpdate = new EventEmitter<boolean>();

  readonly headersStatus = headersStatus;
  constructor(private movieService: MoviesServiceService) { }

  ngOnInit(): void {
  }

  onDelete(id:string){
    this.movieService.DeleteMovie(id).subscribe(
      data=>{
        Swal.fire(
          'Eliminado',
          'Se ha eliminado exitosamente',
          'info'
        );
        this.onRefresh.emit(true);
       }
       )
   
  }
  refresh(mensaje) {
    this.onRefresh.emit(true);
  }

}
