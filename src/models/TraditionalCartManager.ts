import { reactive } from 'vue';
import Produkt from './Produkt';

interface CartItem {
  produkt: Produkt;
  quantity: number;
}

export default class TraditionalCartManager {
  cart: CartItem[] = reactive([]);

  addToCart(produkt: Produkt, quantity: number) {
    console.log(`Adding product: ${produkt.getNazov()}, Quantity: ${quantity}`);
    if (quantity <= 0) {
      console.warn('Invalid quantity. Must be greater than zero.');
      return;
    }
    const existingItem = this.cart.find(
      (item) => item.produkt.getNazov() === produkt.getNazov()
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ produkt, quantity });
    }
    console.log('Current cart:', this.cart);
  }

  removeFromCart(index: number) {
    console.log(`Removing item at index: ${index}`);
    this.cart.splice(index, 1);
    console.log('Current cart:', this.cart);
  }

  updateCartQuantity(index: number, quantity: number) {
    console.log(
      `Updating quantity at index: ${index}, New quantity: ${quantity}`
    );
    if (quantity > 0) {
      this.cart[index].quantity = quantity;
    } else {
      console.warn('Invalid quantity. Must be greater than zero.');
    }
    console.log('Current cart:', this.cart);
  }

  checkout() {
    console.log('Proceeding to checkout:', this.cart);
    this.cart.splice(0); // Clear the cart after checkout
    console.log('Cart after checkout:', this.cart);
  }
}
