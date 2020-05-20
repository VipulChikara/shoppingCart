import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  query: String = ''
  products: Product[] = []
  filteredProducts: Product[] = []

  constructor(private productService: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res
      this.filteredProducts = res
    })
  }

  filter(value) {
    this.products = this.query ? this.filteredProducts.filter(p => p.title.toLowerCase().includes(this.query.toLowerCase()))
      : this.filteredProducts;

    value.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  rating(value) {
    return this.productService.getRatingStar(value);
  }

  addToCart(product) {
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product) {
    this.shoppingCartService.removeFromCart(product);
  }

  quantity(product) {
    return this.shoppingCartService.getQuantity(product);
  }

}
