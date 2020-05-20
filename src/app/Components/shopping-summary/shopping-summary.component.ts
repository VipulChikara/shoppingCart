import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCartItem } from 'src/app/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './shopping-summary.component.html',
  styleUrls: ['./shopping-summary.component.scss']
})
export class ShoppingSummaryComponent implements OnInit {

  cartItems: ShoppingCartItem[] = [];
  shipping: string;
  show = false;
  voucher = '';
  voucherClass = '';
  message = '';
  voucherValue = 0;
  couponValue = 0;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().switchMap(item => {
      this.cartItems = item
      return this.cartService.shipping
    }).switchMap(res => {
      this.shipping = res
      return this.cartService.voucher
    }).switchMap(res => {
      this.voucher = res;
      return this.cartService.voucherValue
    }).switchMap(res => {
      this.voucherValue = res
      console.log(res)
      return this.cartService.couponValue
    }).subscribe(res => {
      console.log(res);
      this.couponValue = res;
    })
  }

  applyVoucher() {
    this.cartService.voucherValue.next(0);
    this.cartService.voucher.next(this.voucher)
    if (this.getTotal())
      if (this.voucher === 'SHOP$200') {
        this.message = "Coupon Applied";
        this.voucherClass = 'green'
        this.cartService.voucherValue.next(200);
      }
      else {
        this.message = "Invalid Coupon";
        this.voucherClass = 'red'
      }


    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  getTotal() {
    if (this.shipping) {
      console.log(this.shipping)
      return this.cartService.getTotalPrice() + parseInt(this.shipping) - this.couponValue - this.voucherValue
    }
  }

  getPrice(price, quantity) {
    console.log(price, quantity)
    return price * quantity;
  }

  getSubtotal() {
    return this.cartService.getSubTotalPrice()
  }

  getTax() {
    return this.cartService.getTaxPrice()
  }

}


