import { Injectable } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class BaseCinfigService 
{
constructor(private base:UserprofileService) 
  {
    let obj = base.getAddress(); 
   }
}