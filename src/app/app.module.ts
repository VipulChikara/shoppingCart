import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { OrderSuccessfullComponent } from './Components/order-successfull/order-successfull.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { ShoppingHeaderComponent } from './Components/shopping-header/shopping-header.component';
import { ShoppingSummaryComponent } from './Components/shopping-summary/shopping-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShoppingDetailsComponent,
    PaymentComponent,
    OrderSuccessfullComponent,
    FooterComponent,
    ShoppingHeaderComponent,
    ShoppingSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
