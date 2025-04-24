<script setup lang="ts">
import { CartListItem, useCartStore } from '@features/cart';
import { products } from '@shared/consts';
import { computed } from 'vue';

const cartStore = useCartStore();

const items = computed(() =>
  products.filter((item) =>
    cartStore.cart.some(
      (cartItem: { id: number; quantity: number }) => cartItem.id === item.id
    )
  )
);

cartStore.cart;
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
