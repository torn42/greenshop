<script setup lang="ts">
import { CartListItem, useCartStore } from '@features/cart';
import { products } from '@shared/consts';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cartStore = useCartStore();

const { cart } = storeToRefs(cartStore);

const items = computed(() =>
  products.filter((item) =>
    cart.value.some(
      (cartItem: { id: number; quantity: number }) => cartItem.id === item.id
    )
  )
);
</script>

<template>
  <section class="flex flex-col flex-4/6">
    <div class="grid grid-cols-6 py-2.5 items-center font-medium">
      <span class="col-span-2">Products</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Total</span>
      <span></span>
    </div>
    <CartListItem v-for="item in items" :key="item.id" :item="item" />
  </section>
</template>
