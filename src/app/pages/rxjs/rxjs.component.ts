import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  pruebas: any = [
    {
      nombre: 'Memoria',
      descripcion: 'En esta prueba se presentará una secuencia de golpes, que debe ser repetida por el usuario. De presentarse algún fallo se deberá inicial nuevamente.',
      imagen: 'mdi mdi-gauge',
      secuencia: [
        { sensor: 0},
        { sensor: 1},
        { sensor: 2},
        { sensor: 3},
        { sensor: 0},
      ]
    },
    {
      nombre: 'Secuencia',
      descripcion:'En esta prueba se presentará una secuencia de golpes, que debe ser repetida por el usuario lo más rápido posible. De presentarse algún fallo se puede continuar con la prueba.',
      imagen: 'mdi mdi-gauge',
      secuencia: [
        { sensor: 0},
        { sensor: 1},
        { sensor: 2},
        { sensor: 3},
        { sensor: 0},
      ]
    },
    {
      nombre: 'Despegue Pie',
      descripcion:'En esta prueba se evaluará la velocidad de reacción y el tiempo en dar un golpe.',
      imagen: 'mdi mdi-gauge',
      secuencia: [
        { sensor: 0},
        { sensor: 1},
        { sensor: 2},
        { sensor: 3},
        { sensor: 0},
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
