import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCartItem } from 'src/app/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCartItem[] = [];
  shipping: string = '';
  coupon: string;
  message: string = '';
  couponClass: string = '';
  couponValue = 0;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().switchMap(((res) => {
      this.cart = res;
      return this.cartService.getShippingPrice()
    })).subscribe(
      res => {
        this.shipping = res;
      }
    )
    this.cartService.coupon.switchMap(res => {
      this.coupon = res
      return this.cartService.couponValue
    }).subscribe(res => {
      this.couponValue = res;
    })
  }

  applyCoupon() {
    this.cartService.couponValue.next(0);
    this.cartService.coupon.next(this.coupon)
    if (this.cartService.getTotalPrice())
      if (this.coupon === 'GET$20') {
        this.message = "Coupon Applied";
        this.couponClass = 'green';
        this.cartService.couponValue.next(20);
      }
      else {
        this.message = "Invalid Coupon";
        this.couponClass = 'red'
      }


    var x = document.getElementById("couponsnackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  getTotalQuantity() {
    return this.cartService.getTotalQuantiy()
  }

  getPrices(price, quantity) {
    return price * quantity;
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }

  deleteFromCart(product) {
    this.cartService.deleteFromCart(product);
  }

  subtotal() {
    return this.cartService.getSubTotalPrice()
  }

  tax() {
    return this.cartService.getTaxPrice()
  }

  total() {
    if (this.shipping && this.cartService.getTotalPrice())
      return this.cartService.getTotalPrice() + parseInt(this.shipping) - this.couponValue;
    else
      return 0;
  }

}
