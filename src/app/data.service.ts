import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  Products = [
    {
      name:'Free Shopping',
      thumbnail:'assets/img/features/f1.png',
    },
    {
      name:'Online Order',
      thumbnail:'assets/img/features/f2.png',
    },
    {
      name:'Save Money',
      thumbnail:'assets/img/features/f3.png',
    },
    {
      name:'Promotions',
      thumbnail:'assets/img/features/f4.png',
    },
    {
      name:'Happy Sell',
      thumbnail:'assets/img/features/f5.png',
    },
    {
      name:'F24/7 Support',
      thumbnail:'assets/img/features/f6.png',
    },
  ]
  pro =[
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f1.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f2.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f3.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f4.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f5.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f6.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f7.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/f8.jpg',
      price:'$78'
    },

  ]
  pro1 =[
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n1.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n2.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n3.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n4.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n5.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n6.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n7.jpg',
      price:'$78'
    },
    {
      brand:'Adidas',
      name:'Cartoon Astronaut T-Shirts',
      thumbnail:'assets/img/products/n8.jpg',
      price:'$78'
    },

  ]

  constructor() {}
  
}
export interface User {
  brand: string;
  name: string;
  thumbnail:string;
  price: string;
}
