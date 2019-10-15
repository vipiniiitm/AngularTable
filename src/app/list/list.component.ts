import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  product;
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  getProductDetails(id) {
    this.api.getProduct(id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product);
        this.isLoadingResults = false;
      });
  }

}
