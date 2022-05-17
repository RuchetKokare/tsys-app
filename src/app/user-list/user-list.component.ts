import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  myapidata:any
  constructor(  private user:HttpClient) 
  {
      this.user.get('https://reqres.in/api/unknown').
      subscribe(
        (mydata)=>(this.myapidata=mydata)
        );
  
  }

  ngOnInit(): void {


  }

}
