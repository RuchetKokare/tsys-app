import { Directive } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {

  constructor(private url_check:UserprofileService) 
  {
     let ref = url_check.url;
     console.log(ref);
   }
}