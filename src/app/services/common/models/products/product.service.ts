import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client.service';
import { VM_Create_Product } from './product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(input: VM_Create_Product, successCallBack?: any,errorCallBack?:any) {
    this.httpClientService.post({
      controller: 'products',
    }, input).subscribe(item => {
      successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      debugger
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error
      let message = "";
      console.log(_error["errors"])
      message=_error["errors"]
      // _error["errors"].forEach((v, index) => {
      //   v.value.forEach((_v, _index) => {
      //     message+=`${_v}<br>`
      //   })
      // })
      errorCallBack(message);
    })
  }
}
