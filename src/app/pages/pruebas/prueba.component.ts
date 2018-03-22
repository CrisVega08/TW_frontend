import { Component, OnInit } from '@angular/core';
import { Prueba } from '../../models/prueba.model';
import { PruebasService } from '../../services/service.index';
import swal from 'sweetalert2';
@Component({
  selector: 'app-rxjs',
  templateUrl: './prueba.component.html',
  styles: []
})
export class PruebaComponent implements OnInit {
  Pruebas: Prueba[] = [];

  constructor(
    public _txtSer: PruebasService
  ) {}

  ngOnInit() {
    this.loadingTxt();
  }

  loadingTxt() {
    this._txtSer.getData()
        .subscribe( (res: any) => {
          this.Pruebas = res.pruebas;
        });
  }

  message() {
    swal({
      title: '¿Estás seguro de eliminar el registro?',
      text: '¿Si lo eliminas no podras revertir este proceso?!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swal(
          'Eliminado!',
          'la prueba ha sido eliminada.',
          'success'
        );
      } else {
        swal(
          'Cancelado',
          'Se ha cancelado la eliminación :)',
          'error'
        );
      }
    });
  }
}
