import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  config: any;
  users:any=[];
  items = [];
  headElements = ['id', 'FirstName', 'LastName', 'Company Name','City','state','zip','email','web','age'];
  pageOfItems: Array<any>;
  number;
  constructor(private router: Router, private apiService: ApiService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 500
    };
   }

  ngOnInit() {
    
    this.apiService.getUsers()
      .subscribe( data => {
          this.users = data;
      });
   
     
  }
  

  // showUser(): void {
   
  //   this.router.navigate(['list']);
  // };

  pageChanged(event){
    this.config.currentPage = event;
  }

  }


