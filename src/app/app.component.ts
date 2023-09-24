import { Component } from '@angular/core';
import { CustomerToastrService, ToasterMessageType, ToasterPositionType } from './services/ui/customer-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ETicaretClient';
  constructor(private readonly toastrService: CustomerToastrService) {
    toastrService.message('Güven Message', 'Title', { messageType: ToasterMessageType.Success, position: ToasterPositionType.BottomCenter })

  }

}
$.get('https://localhost:7194/api/products', data => {
  console.log(data)
})