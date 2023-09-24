import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector)
  }


  ngOnInit(): void {
    this.showSpinner()
  }
  showMessage() {
   
  }

}
