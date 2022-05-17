import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService 
{

  url ="www.wallpaper.com"

  getAddress()
  {
    let Add={
      area:"baner",
      pincode:413305,
      locality:"tower"
         
    }
    return Add;
  }
        getCompanyName()
      {
        return "T systems"
      }
  
    constructor()
     { }


}
