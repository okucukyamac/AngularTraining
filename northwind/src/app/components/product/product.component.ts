import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  product1: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 2, productName: "Çatal", categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 3, productName: "Kaşık", categoryId: 1, unitPrice: 5 }
  product4: any = { productId: 4, productName: "Tabak", categoryId: 1, unitPrice: 5 }
  product5: any = { productId: 10, productName: "Belirsiz", categoryId: 1, unitPrice: 5 }
  products = [this.product1, this.product2, this.product3, this.product4, this.product5]

}
