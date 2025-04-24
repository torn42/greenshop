<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '../model/types';

const { product } = defineProps<{
  product: Product;
}>();

const totalPrice = computed(() => {
  return product.sale
    ? (product.price - (product.price * product.sale) / 100).toFixed(2)
    : product.price.toFixed(2);
});
</script>

<template>
  <article
    class="flex flex-col max-w-60 border-t border-white hover:border-[#46A358] group transition-all overflow-hidden"
  >
    <div class="py-2 px-0.5 relative">
      <div
        v-if="product.sale"
        class="absolute top-1.5 bg-[#46A358] text-white font-medium px-2.5 py-1.5 -translate-x-8 group-hover:-translate-x-1 transition"
      >
        <span class="opacity-0 group-hover:opacity-100 transition"
          >{{ product.sale }}%</span
        >
        OFF
      </div>
      <img :src="product.imageUrl" alt="product image" class="size-64" />
      <div
        class="flex items-center justify-center -mt-2 gap-2 opacity-0 group-hover:opacity-100 transition"
      >
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="flex flex-col pb-4">
      <span class="break-words">{{ product.title }}</span>
      <div class="flex items-center gap-3">
        <span class="text-lg font-bold text-[#46A358] break-words"
          >${{ totalPrice }}</span
        >
        <span
          v-if="product.sale"
          class="text-lg text-[#A5A5A5] line-through break-words"
          >${{ product.price.toFixed(2) }}</span
        >
      </div>
    </div>
  </article>
</template>
