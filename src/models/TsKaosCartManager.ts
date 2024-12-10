import { reactive } from 'vue';
import Produkt from './Produkt';
import { LogBefore, LogAfter, LogError } from 'src/aspects/kaopLogging';

interface CartItem {
  produkt: Produkt;
  quantity: number;
}

export default class TsKaosCartManager {
  cart: CartItem[];

  constructor() {
    this.cart = reactive([]);
  }

  @LogBefore
  @LogAfter
  @LogError
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

  @LogBefore
  @LogAfter
  @LogError
  checkout() {
    console.log('Checking out:', this.cart);
    this.cart = [];
  }

  // Other methods with aspects applied...

  @LogBefore
  @LogAfter
  @LogError
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  @LogBefore
  @LogAfter
  @LogError
  updateCartQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      this.cart[index].quantity = quantity;
    }
  }
}
