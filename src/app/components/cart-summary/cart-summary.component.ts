import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { Rental } from 'src/app/models/rental';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  car:Car[]=[];
  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }
  

  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(rental:Rental){
    this.cartService.removeFromCart(rental);
    this.toastrService.success("silindi  sepetten silindi")
  }

}
