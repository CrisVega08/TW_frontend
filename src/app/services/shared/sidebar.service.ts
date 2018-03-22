import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  menu: any = [
        { title: 'Pricipal', url: '/dashboard', icono: 'mdi mdi-gauge' },
        { title: 'Usuarios', url: '/usuarios' , icono: 'mdi mdi-account' },
        { title: 'Pruebas', url: '/prueba' , icono: 'mdi mdi-google-controller'},
        { title: 'Resultados', url: '/promise' , icono: 'mdi mdi-format-page-break'},
        { title: 'Gráficas', url: '/graficas1' , icono: 'mdi mdi-chart-pie' },
        { title: 'Conexión', url: '/bluetooth', icono: 'mdi mdi-bluetooth-connect' }
  ];
  constructor() { }

}
