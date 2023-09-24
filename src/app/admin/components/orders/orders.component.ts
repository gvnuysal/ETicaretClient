import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector)
  }


  ngOnInit(): void {
    this.showSpinner()
  }

}
