import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this.showSpinner()
  }

}
