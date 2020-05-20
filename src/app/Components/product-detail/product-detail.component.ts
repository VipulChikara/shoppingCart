import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import 'rxjs/add/operator/switchMap';
import { ProductDetail } from 'src/app/models/product-detail.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductDetail;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.params.switchMap(params => {
      return this.productService.getproductDetail(params['id'])
    }).subscribe(res => {
      this.product = res;
    })
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  rating(value) {
    return this.productService.getRatingStar(value);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  quantity() {
    return this.cartService.getQuantity(this.product);
  }

  changeModel() {
    switch (this.product.model) {
      case 'Small':
        this.product.price = this.product.prices[0]
        break;

      case 'Medium':
        this.product.price = this.product.prices[1]
        break;

      case 'Large':
        this.product.price = this.product.prices[2]
        break;
    }
    this.quantity();
  }

}
