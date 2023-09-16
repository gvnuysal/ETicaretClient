import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsComponent } from './components/components.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports:[LayoutModule]
})
export class AdminModule { }
