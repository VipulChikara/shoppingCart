import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment = ''
  totalQuantity: number = 0;
  shippingDetails;
  cartItems;
  couponValue;
  voucherValue;

  constructor(private cartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.totalQuantity = this.cartService.getTotalQuantiy();

    this.cartService.shippingDetails.switchMap(res => {
      this.shippingDetails = res;
      return this.cartService.getCartItems()
    }).switchMap(res => {
      this.cartItems = res;
      return this.cartService.couponValue
    }).switchMap(res => {
      this.couponValue = res;
      return this.cartService.voucherValue
    }).subscribe(res => {
      this.voucherValue = res;
    })
  }

  submit(form: NgForm) {
    let order = {
      payment: form.value,
      order: this.cartItems,
      totalPrice: this.cartService.getTotalPrice() - this.couponValue - this.voucherValue
    }
    console.log(order);
    this.router.navigate(['/orderSuccessful'])
  }

}
