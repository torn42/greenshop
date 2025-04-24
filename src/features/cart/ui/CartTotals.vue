<script setup lang="ts">
import { computed, ref } from 'vue';
import { products } from '@shared/consts';
import { useCartStore } from '../model/cart';
import { BaseButton, BaseModal } from '@shared/ui';
import { RouterLink } from 'vue-router';

const isModalOpen = ref(false);

const cartStore = useCartStore();

const { clearCart } = cartStore;

const items = computed(() =>
  products.filter((item) =>
    cartStore.cart.some((cartItem) => cartItem.id === item.id)
  )
);

const subtotal = computed(() => {
  return items.value.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    if (!product) return total;
    return total + product.price;
  }, 0);
});

const total = computed(() => subtotal.value + 16);

const handleClick = () => {
  isModalOpen.value = true;
  clearCart();
};
</script>

<template>
  <section class="flex flex-col flex-1/6">
    <div class="font-bold text-lg pb-1 border-b border-[#dadddb]">
      Cart Totals
    </div>
    <div class="flex flex-col gap-1 pt-2.5 pb-5">
      <div class="flex align-items justify-between">
        Subtotal
        <span class="font-medium text-lg">${{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="flex align-items justify-between pb-3">
        Shipping <span class="font-medium text-lg">$16.00</span>
      </div>
      <div class="flex justify-between font-bold">
        Total
        <span class="text-lg text-[#46A358]">${{ total.toFixed(2) }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-3 text-center">
      <BaseButton
        :class="{ 'bg-gray-500 pointer-events-none': items.length === 0 }"
        @click="handleClick"
        class="flex justify-center"
        >Proceed to checkout</BaseButton
      >
      <RouterLink to="/" class="text-[#46A358] hover:underline"
        >Continue Shopping</RouterLink
      >
    </div>
  </section>
  <BaseModal :isOpen="isModalOpen" @close="isModalOpen = false">
    <div class="py-4 pt-8 px-6 border-b border-[#dadddb]">
      <div class="flex flex-col items-center">
        <img src="../assets/success.png" alt="success" />
        <span>Your order has been received</span>
      </div>
    </div>
    <div class="flex flex-col items-center py-4 px-6 gap-4">
      <p class="text-sm text-[#727272] text-center">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
      <BaseButton @click="isModalOpen = false">Close</BaseButton>
    </div>
  </BaseModal>
</template>
