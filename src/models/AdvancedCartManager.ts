// src/models/AdvancedCartManager.ts
import { reactive } from 'vue';
import Produkt from './Produkt';
import { withConditionalLogging } from 'src/aspects/advancedLoggingAspect';

interface CartItem {
  produkt: Produkt;
  quantity: number;
}

export default class AdvancedCartManager {
  cart: CartItem[] = reactive([]);

  @withConditionalLogging('INFO')
  addToCart(produkt: Produkt, quantity: number) {
    const existingItem = this.cart.find(
      (item) => item.produkt.getNazov() === produkt.getNazov()
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ produkt, quantity });
    }
  }

  @withConditionalLogging('DEBUG')
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  @withConditionalLogging('DEBUG')
  updateCartQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      this.cart[index].quantity = quantity;
    }
  }

  @withConditionalLogging('ERROR')
  checkout() {
    console.log('Proceeding to checkout:', this.cart);
    this.cart = [];
  }
}
