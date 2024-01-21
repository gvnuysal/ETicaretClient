import { Component, Injector, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { VM_Create_Product } from 'src/app/services/common/models/products/product.model';
import { ProductService } from 'src/app/services/common/models/products/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {


  constructor(private productService: ProductService,injector:Injector,private alertify:AlertifyService) {
    super(injector)
  }

  ngOnInit(): void {
  }
  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    const createProduct: VM_Create_Product = new VM_Create_Product()
    createProduct.name = name.value
    createProduct.price = parseFloat(price.value)
    createProduct.stock = parseInt(stock.value)
    this.showSpinner()
    this.productService.create(createProduct, () => {
      this.hideSpinner();
      this.alertify.message("İşlem Başarılı", {
        messageType: MessageType.Success,
        position: Position.BottomRight,
        dismissOthers: true
      })
    })

  }
}
