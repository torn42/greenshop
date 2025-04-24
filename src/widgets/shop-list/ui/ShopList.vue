<script setup lang="ts">
import { CartButtonAdd } from '@/features/cart';
import { ProductCard } from '@entities/product';
import { products } from '@shared/consts';
</script>

<template>
  <section class="grid grid-cols-4 justify-items-center gap-y-2 gap-x-8">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
      <template #actions><CartButtonAdd :productId="product.id" /> </template>
    </ProductCard>
  </section>
</template>
