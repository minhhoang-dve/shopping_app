import { Component } from '@angular/core';
import { Product } from 'src/app/product.model';
import { DataService, User } from "src/app/data.service";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  users$: Observable<User[]> | undefined;

  pro : any = [];
  proNew : any = [];
  products: Product[] = [];


  constructor(private dataService: DataService) {}

  ngOnInit() {
    debugger
    this.products = this.dataService.Products;
    this.pro = this.dataService.pro;
    this.proNew = this.dataService.pro1;
  }
}
