import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): any {
    return [{id: 1 , type: 'dresses', gender:'women', src: '../assets/1.jfif', size:["S","M","L","XL"], price:2300},
    {id: 2 , type: 'dresses', gender:'women', src: '../assets/2.jfif', size:["S","M","L","XL"], price:2000,},
    {id: 3 , type: 'dresses', gender:'women', src: '../assets/3.jfif', size:["S","M","L","XL"], price:1500},
    {id: 4 , type: 'dresses', gender:'women', src: '../assets/4.jfif', size:["S","M","L","XL"], price:1000},
    {id: 5 , type: 'dresses', gender:'women', src: '../assets/6.jfif', size:["S","M","L","XL"], price:1200},
    {id: 6 , type: 'accessories', gender:'women', src: '../assets/A1.jpg', size:["S","M","L","XL"], price:1200},
    {id: 7 , type: 'accessories', gender:'women', src: '../assets/A2.jpg', size:["S","M","L","XL"], price:1200},
    {id: 8 , type: 'accessories', gender:'women', src: '../assets/A3.jpg', size:["S","M","L","XL"], price:1200},
    {id: 9 , type: 'accessories', gender:'women', src: '../assets/A4.jpg', size:["S","M","L","XL"], price:1200},
    {id: 10 , type: 'accessories', gender:'women', src: '../assets/A5.jpg', size:["S","M","L","XL"], price:1200},
    {id: 11, type: 'accessories', gender:'women', src: '../assets/A6.jpg', size:["S","M","L","XL"], price:1200},
    {id: 12, type: 'tops', gender:'women', src: '../assets/T1.jpg', size:["S","M","L","XL"], price:1200},
    {id: 13, type: 'tops', gender:'women', src: '../assets/T2.jpg', size:["S","M","L","XL"], price:1100},
    {id: 14, type: 'tops', gender:'women', src: '../assets/T3.jpg', size:["S","M","L","XL"], price:1700},
    {id: 15, type: 'tops', gender:'women', src: '../assets/T4.jpg', size:["S","M","L","XL"], price:1300},
    {id: 16, type: 'tops', gender:'women', src: '../assets/T5.jpg', size:["S","M","L","XL"], price:900},
    {id: 17, type: 'tops', gender:'women', src: '../assets/T6.jpg', size:["S","M","L","XL"], price:800},
    {id: 18, type: 'tops', gender:'women', src: '../assets/T7.jpg', size:["S","M","L","XL"], price:850},
    {id: 19, type: 'tops', gender:'women', src: '../assets/T8.jpg', size:["S","M","L","XL"], price:750},];
    }
}
