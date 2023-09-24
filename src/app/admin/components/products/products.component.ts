import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector)
  }


  ngOnInit(): void {
    this.showSpinner()
  }

}
