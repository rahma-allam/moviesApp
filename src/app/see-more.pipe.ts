import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(desc:string , limit:number): string {
    return desc.substr(0,limit)
  }

}
