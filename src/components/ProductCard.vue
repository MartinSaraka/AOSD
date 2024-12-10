<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <div class="text-h6">{{ produkt.getNazov() }}</div>
      <div class="text-subtitle2">Price: {{ produkt.getCena() }}€</div>
      <div class="text-body1 q-mt-sm">{{ produkt.getPopis() }}</div>
    </q-card-section>

    <q-card-section class="row items-center q-gutter-sm">
      <q-input
        v-model.number="quantity"
        type="number"
        label="Quantity"
        min="1"
        dense
        outlined
        class="col-4"
      />
      <q-btn
        label="Add to Cart"
        @click="emitAddToCart"
        color="primary"
        :disable="quantity < 1"
        class="col"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import Produkt from 'src/models/Produkt';

const props = defineProps<{ produkt: Produkt }>();
const emit = defineEmits<{
  (e: 'add-to-cart', produkt: Produkt, quantity: number): void;
}>();

const quantity = ref(1);

function emitAddToCart() {
  emit('add-to-cart', props.produkt, quantity.value);
}
</script>
