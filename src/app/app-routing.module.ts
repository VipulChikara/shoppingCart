import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { OrderSuccessfullComponent } from './Components/order-successfull/order-successfull.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'shippingDetail', component: ShoppingDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'orderSucessfull', component: OrderSuccessfullComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
