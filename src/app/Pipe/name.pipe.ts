import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    if(value.length >= 20){
      return value.slice(0, 20)+" ..."
    }else return value
  }

}
