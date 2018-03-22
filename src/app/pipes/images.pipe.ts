import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: string, type: string = 'usuario'): any {

    let url = URL_SERVICES + '/img';
    if ( !image ) {
      return url + '/usuario/xxx';
    }

    if ( image.indexOf('https') >= 0) {
      return image;
    }

    switch ( type ) {
      case 'usuario':
        url += '/usuarios/' + image;
      break;
      case 'pruebas':
        url += '/pruebas/' + image;
      break;

      default:
        console.log('no existe imagen');
        url += '/usuario/xxx';
    }

    return url;
  }

}
