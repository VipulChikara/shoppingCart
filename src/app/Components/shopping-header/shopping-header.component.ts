import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-header',
  templateUrl: './shopping-header.component.html',
  styleUrls: ['./shopping-header.component.scss']
})
export class ShoppingHeaderComponent implements OnInit {

  @Input() shippingForm: boolean = false;
  path

  constructor(private router: Router, private route: ActivatedRoute,
    private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.path = res[0]['path'];
    });
  }

  shippingDetail() {
    if (this.cartService.getTotalQuantiy())
      this.router.navigate(['/shippingDetail'])
  }

  payment() {
    if (this.cartService.getTotalQuantiy() && this.shippingForm)
      this.router.navigate(['/payment'])
  }



}
