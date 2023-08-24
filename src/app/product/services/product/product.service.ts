import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/productInterface/product.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8081/api/products';
  private httpHeaders = new Headers({'Content-Type': 'application/json'});

  private products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  createProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number):Observable<Product| undefined>{
    return this.http.get<Product>(`${this.baseUrl}/id/${id}`)
    .pipe(
      catchError(e => of(undefined))
      );
  }

  getProductByName(name: string):Observable<Product[]>{
    console.log(`${this.baseUrl}/${name}`);
    return this.http.get<Product[]>(`${this.baseUrl}/${name}`)
    .pipe(map(resp =>{
      console.log(resp);
      return resp;
    })
      );
  }

  updateProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`);
  }





}
