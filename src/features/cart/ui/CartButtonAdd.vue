<script setup lang="ts">
import { IconCart } from '@shared/assets';
import { useCartStore } from '../model/cart';
import { computed } from 'vue';

const { productId } = defineProps<{
  productId: number;
}>();
const cartStore = useCartStore();
const { addToCart, removeFromCart } = cartStore;
const isInCart = computed(() =>
  cartStore.cart.some((item) => item.id === productId)
);

const handleClick = () => {
  !isInCart.value;
  !isInCart.value ? addToCart(productId) : removeFromCart(productId);
};
</script>

<template>
  <button @click="handleClick" class="cursor-pointer">
    <IconCart :fill="isInCart ? '#46A358' : '#4a4a4a'" />
  </button>
</template>
