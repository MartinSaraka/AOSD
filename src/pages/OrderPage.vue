<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="q-pa-md q-mt-xl">
        <h4>Basic AOP logging</h4>
        <ProductList @add-to-cart="addToCart" />

        <q-separator class="q-mt-lg q-mb-md" />

        <div v-if="cartManager.cart.length > 0">
          <h4>Shopping Cart</h4>
          <q-list bordered class="rounded-borders">
            <q-item
              v-for="(item, index) in cartManager.cart"
              :key="index"
              class="q-pa-sm"
              clickable
            >
              <q-item-section>
                <div>{{ item.produkt.getNazov() }}</div>
                <div class="text-caption text-grey">
                  {{ item.produkt.getPopis() }}
                </div>
                <div>Price: {{ item.produkt.getCena() }}€</div>
              </q-item-section>

              <q-item-section side>
                <q-input
                  v-model.number="item.quantity"
                  type="number"
                  min="1"
                  dense
                  outlined
                  @input="updateCartQuantity(index, item.quantity)"
                />
              </q-item-section>

              <q-item-section side>
                <q-btn
                  icon="delete"
                  color="negative"
                  @click="removeFromCart(index)"
                />
              </q-item-section>
            </q-item>
          </q-list>

          <q-btn
            label="Checkout"
            color="primary"
            class="q-mt-md"
            @click="checkout"
          />
        </div>
        <div v-else>
          <p>Your cart is empty. Add some products!</p>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ProductList from 'src/components/ProductList.vue';
import Produkt from 'src/models/Produkt';
import CartManager from 'src/models/CartManager';

const cartManager = reactive(new CartManager()); // Make CartManager reactive

function addToCart(produkt: Produkt, quantity: number) {
  cartManager.addToCart(produkt, quantity);
}

function updateCartQuantity(index: number, quantity: number) {
  cartManager.updateCartQuantity(index, quantity);
}

function removeFromCart(index: number) {
  cartManager.removeFromCart(index);
}

function checkout() {
  cartManager.checkout();
}
</script>
