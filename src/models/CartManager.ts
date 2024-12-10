// src/models/CartManager.ts
import Produkt from './Produkt';
import { withLogging } from 'src/aspects/loggingAspect';
import { withQuantityValidation } from 'src/aspects/validateQuantityAspect';
import { reactive } from 'vue';
import {
  LogBefore,
  LogAfter,
  LogError,
} from 'src/aspects/customLoggingDecorators';
interface CartItem {
  produkt: Produkt;
  quantity: number;
}

export default class CartManager {
  cart: CartItem[] = reactive([]);

  addToCart = withQuantityValidation(
    withLogging(function (
      this: CartManager,
      produkt: Produkt,
      quantity: number
    ) {
      const existingItem = this.cart.find(
        (item) => item.produkt.getNazov() === produkt.getNazov()
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.push({ produkt, quantity });
      }
    })
  );

  @LogBefore()
  @LogAfter()
  @LogError()
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
  @LogBefore()
  @LogAfter()
  @LogError()
  updateCartQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      this.cart[index].quantity = quantity;
    }
  }
  @LogBefore()
  @LogAfter()
  @LogError()
  checkout() {
    console.log('Proceeding to checkout:', this.cart);
    this.cart.splice(0); // Clear the cart after checkout
  }
}
