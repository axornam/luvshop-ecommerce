import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response));
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}

interface ProductResponse {
  _embedded: {
    products: Product[];
  };
}
