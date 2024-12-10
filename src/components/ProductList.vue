<!-- ProductList.vue -->
<template>
  <div class="row q-col-gutter-md">
    <ProductCard
      v-for="(produkt, index) in produkty"
      :key="index"
      :produkt="produkt"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import ProductCard from './ProductCard.vue';
import { generateSampleProducts } from 'src/utils/sampleProducts';
import Produkt from 'src/models/Produkt';

const produkty = ref<Produkt[]>(generateSampleProducts());

const emit = defineEmits<{
  (e: 'add-to-cart', produkt: Produkt, quantity: number): void;
}>();

function addToCart(produkt: Produkt, quantity: number) {
  emit('add-to-cart', produkt, quantity); // Emit to parent
}
</script>
