import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardsComponent } from './admin/components/dashboards/dashboards.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: 'admin', component: LayoutComponent, children: [
      { path: 'ad-customers', loadChildren: () => import('./admin/components/customers/customers.module').then(m => m.CustomersModule) },
      { path: 'ad-orders', loadChildren: () => import('./admin/components/orders/orders.module').then(m => m.OrdersModule) },
      { path: 'ad-products', loadChildren: () => import('./admin/components/products/products.module').then(m => m.ProductsModule) },
      { path: '', component: DashboardsComponent }
    ]
  },
  { path: '', component: HomeComponent },
  { path: 'products', loadChildren: () => import('./ui/components/products/products.module').then(m => m.ProductsModule) },
  { path: 'baskets', loadChildren: () => import('./ui/components/baskets/baskets.module').then(m => m.BasketsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
