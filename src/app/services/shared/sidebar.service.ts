import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  menu: any = [
    {
      title: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { title: 'Pricipal', url: '/dashboard' },
        { title: 'Conexión', url: '/progress' },
        { title: 'Pruebas', url: '/rxjs' },
        { title: 'Resultados', url: '/promise' },
        { title: 'Gráficas', url: '/graficas1' }
      ]
    }
  ];
  constructor() { }

}
