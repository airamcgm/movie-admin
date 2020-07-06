import { Component, OnInit, Output, EventEmitter, ViewChild, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MoviesServiceService } from 'src/app/movies-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm;
  @Output() onUpdate = new EventEmitter<boolean>();
  @Input() movieId: any;

  closeResult = '';

  constructor(private modalService: NgbModal, private movieService: MoviesServiceService) { }

  newMovieForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    publication_date: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.movieService.GetMovieById(this.movieId).subscribe(
      data=>{
        this.newMovieForm.patchValue({
          nombre: data.nombre,
          publication_date:data.publication_date,
          status: data.status,
          time: data.time
        }) 
       }
       );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(){
    if (this.newMovieForm.valid) {
      this.movieService.UpdateMovieById(this.movieId,this.newMovieForm.value).subscribe(data=>{
        Swal.fire(
          'Actualizado',
          'La información de la película ha sido actualizada con éxito',
          'success'
        );
        this.onUpdate.emit(true);
        this.modalService.dismissAll();
       });
    }
  }
  get nombre() {
    return this.newMovieForm.get('nombre');
  }
  get publication_date() {
    return this.newMovieForm.get('publication_date');
  }
  get status() {
    return this.newMovieForm.get('status');
  }
  get time() {
    return this.newMovieForm.get('time');
  }

}
