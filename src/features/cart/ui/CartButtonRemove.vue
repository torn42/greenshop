<script setup lang="ts">
import IconDelete from '@shared/assets/IconDelete.vue';
import { useCartStore } from '../model/cart';

const { productId } = defineProps<{
  productId: number;
}>();

const { removeFromCart } = useCartStore();

const handleClick = () => {
  removeFromCart(productId);
};
</script>

<template>
  <button @click="handleClick" class="cursor-pointer">
    <IconDelete />
  </button>
</template>
