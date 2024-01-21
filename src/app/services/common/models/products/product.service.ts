import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client.service';
import { VM_Create_Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(input: VM_Create_Product, successCallBack?: any) {
    this.httpClientService.post({
      controller: 'products',
    }, input).subscribe(item => {
      successCallBack();
    })
  }
}
