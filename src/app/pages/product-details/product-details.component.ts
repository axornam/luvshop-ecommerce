import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  product: Product | undefined;
  id: number | undefined;

  constructor(private productService: ProductService) {
    this.id = parseInt(this.route.snapshot.params['id'], 1);
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    if (!this.id) return;
    this.productService.getProductById(this.id).subscribe((data) => {
      this.product = data;
    });
  }
}
