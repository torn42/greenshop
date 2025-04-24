<script setup lang="ts">
import { BaseButton } from '@shared/ui';
import type { Product } from '@entities/product';
import CartButtonRemove from './CartButtonRemove.vue';

defineProps<{
  item: Product;
}>();
</script>

<template>
  <div class="grid grid-cols-6 py-2.5 items-center">
    <div class="flex items-center col-span-2 gap-4">
      <img
        :src="item.imageUrl"
        width="70"
        height="70"
        alt="item image"
        class="size-[70px]"
      />
      <div class="flex flex-col gap-1 text-sm">
        <span class="font-medium">{{ item.title }}</span>
        <span class="text-[#727272]"
          >ID: <span class="text-black">{{ item.id }}</span></span
        >
      </div>
    </div>
    <div class="font-medium">${{ item.price.toFixed(2) }}</div>
    <div>
      <div class="flex items-center gap-3">
        <BaseButton class="rounded-full">-</BaseButton>
        <span>1</span>
        <BaseButton class="rounded-full">+</BaseButton>
      </div>
    </div>
    <div>
      <div class="font-bold text-[#46A358]">${{ item.price.toFixed(2) }}</div>
    </div>
    <div>
      <CartButtonRemove :productId="item.id" />
    </div>
  </div>
</template>
