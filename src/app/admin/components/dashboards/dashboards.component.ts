import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }
  showMessage() {
    this.alertifyService.message("Merhaba",{delay:3,dismissOthers:true,messageType:MessageType.Success,position:Position.BottomLeft})
  }

}
