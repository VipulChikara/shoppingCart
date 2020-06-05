import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';
import { ShippingDetails } from '../models/shipping-details.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: ShoppingCartItem[] = [];

  cart = new BehaviorSubject(this.cartItems);

  shipping = new BehaviorSubject('0');
  shippingDetail: ShippingDetails = { firstName: '', lastName: '', address: '', address2: '', country: '', city: '', zip: '', phone: '', shipping: '0' }
  shippingDetails = new BehaviorSubject(this.shippingDetail);

  coupon = new BehaviorSubject('');
  couponValue = new BehaviorSubject(0);

  voucher = new BehaviorSubject('');
  voucherValue = new BehaviorSubject(0);

  constructor() { }

  addToCart(product) {
    this.updateCart(product, 1)
  }

  removeFromCart(product) {
    this.updateCart(product, -1)
  }

  deleteFromCart(product) {
    this.cartItems = this.cartItems.filter(item => {
      if (item.$key !== product.$key) {
        return true;
      }
      else {
        if (product.model !== item.model)
          return true;
        else
          return false;
      }
    })
    this.cart.next(this.cartItems)
  }

  clearCart() {
    this.cart.next([])
  }

  getCartItems() {
    return this.cart
  }

  getQuantity(product) {
    let $product;
    if (this.cartItems)
      $product = this.cartItems.filter(item => {
        return item.$key === product.$key && item.model === product.model
      })
    return $product[0] ? $product[0].quantity : 0;
  }

  getTotalQuantiy() {
    let total = 0;
    this.cartItems.forEach(item => total += item.quantity)
    return total;
  }

  updateCart(product, quantity) {
    if (this.cartItems.length) {
      let index = this.cartItems.findIndex((item) => item.$key === product.$key && item.model === product.model)
      if (index >= 0) {
        if (this.cartItems[index].quantity == 1 && quantity <= -1)
          this.deleteFromCart(product)

        else {
          if (this.cartItems[index].quantity < 20) {
            this.cartItems[index].quantity += quantity
            this.cartItems[index].model = product.model
          }
          else {
            alert(`${this.cartItems[index].title} has already 20 quantity`)
          }
        }
      }
      else
        this.cartItems.push({
          $key: product.$key,
          title: product.title,
          imageUrl: product.imageUrl ? product.imageUrl : product.imageUrls[0],
          price: product.price,
          rating: product.rating,
          quantity: quantity,
          model: product.model
        })
    }
    else {
      this.cartItems.push({
        $key: product.$key,
        title: product.title,
        imageUrl: product.imageUrl ? product.imageUrl : product.imageUrls[0],
        price: product.price,
        rating: product.rating,
        quantity: quantity,
        model: product.model
      })
    }
  }

  // price
  getSubTotalPrice() {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.quantity
    })
    return total;
  }

  getShippingPrice() {
    return this.shipping;
  }

  getTaxPrice() {
    return this.getSubTotalPrice() * 0.18;
  }

  getTotalPrice() {
    return this.getSubTotalPrice() + this.getTaxPrice();
  }




}
