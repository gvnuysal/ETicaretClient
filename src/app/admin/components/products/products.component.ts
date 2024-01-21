import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private readonly httpClientService: HttpClientService) {
    super(injector)
  }

  ngOnInit(): void {
    
  }

}