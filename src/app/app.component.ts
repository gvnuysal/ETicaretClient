import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ETicaretClient';
  /**
   *
   */
  constructor(private readonly toasterService: ToastrService) { 
    toasterService.success('Merhaba')
  }
}  