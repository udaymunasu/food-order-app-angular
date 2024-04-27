import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService, 
    private foodService: FoodService) {
      let foods = foodService.getAll();
      cartService.addToCart(foods[1]);
      cartService.addToCart(foods[2]);
      cartService.addToCart(foods[3]);
    this.setCart();//this will load data
   }

  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();//this will load data
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();//this will load data
  }

}
