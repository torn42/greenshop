<script setup lang="ts">
import BaseContainer from '@/shared/ui/BaseContainer.vue';
import { CartList } from '@widgets/cart-list';
import { CartTotals } from '@features/cart';
</script>

<template>
  <BaseContainer>
    <div class="flex py-16">
      <CartList />
      <CartTotals />
    </div>
  </BaseContainer>
</template>
