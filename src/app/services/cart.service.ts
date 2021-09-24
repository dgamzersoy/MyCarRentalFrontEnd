import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToRental(rental:Rental){
  let item = CartItems.find(c=>c.rental.rentalId === rental.rentalId);
  if(item!=null){
    item.quantity+=1;
  }
  else{
    let cartItem = new CartItem();
    cartItem.rental=rental;
    cartItem.quantity=1;
    CartItems.push(cartItem)
  }
}

list():CartItem[]{
  return CartItems;
}


removeFromCart(rental:Rental){
  let item:CartItem = CartItems.find(c=>c.rental.rentalId === rental.rentalId);
  if(item.quantity>1){
    item.quantity-=1;
   }
   else{

  CartItems.splice(CartItems.indexOf(item),1);
}
}
}
