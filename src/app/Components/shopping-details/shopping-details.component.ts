import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShippingDetails } from 'src/app/models/shipping-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit {
  shippingDetails: ShippingDetails = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    country: '',
    city: '',
    zip: '',
    phone: '',
    shipping: '0'
  }

  constructor(private cartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.shippingDetails.subscribe(res => this.shippingDetails = res)
  }

  submit(form: NgForm) {
    this.cartService.shippingDetails.next(this.shippingDetails);
    this.router.navigate(['/payment'])
  }

  changeShipping() {
    this.cartService.shipping.next(this.shippingDetails.shipping);
  }

}
