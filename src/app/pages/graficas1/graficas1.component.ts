import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Secuencia', 'Memoría', 'Despegue'],
      'data':  [15, 5, 10],
      'type': 'doughnut',
      'legend': 'Prueba favorita'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [28, 12],
      'type': 'doughnut',
      'legend': 'Usuarios'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [37, 3],
      'type': 'doughnut',
      'legend': '¿Le gustó el funcionamiento?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [40, 0],
      'type': 'doughnut',
      'legend': '¿Lo recomendaría?'
    },
  };

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
