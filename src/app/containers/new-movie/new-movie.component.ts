import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MoviesServiceService } from 'src/app/movies-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm;
  @Output() onRefresh = new EventEmitter<boolean>();

  closeResult = '';

  constructor(private modalService: NgbModal, private movieService: MoviesServiceService) { }

  newMovieForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    publication_date: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.newMovieForm.reset();
    this.newMovieForm.patchValue({
      nombre: null,
      publication_date:null,
      status: null,
      time: null
    })
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
      this.movieService.AddNewMovie(this.newMovieForm.value).subscribe(data=>{
        Swal.fire(
          'Enviado',
          'Se ha enviado su petición exitosamente',
          'success'
        );
        this.onRefresh.emit(true);
        this.newMovieForm.patchValue({
          nombre: null,
          publication_date:null,
          status: null,
          time: null
        });
        this.newMovieForm.reset();
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
