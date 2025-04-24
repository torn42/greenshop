<script setup lang="ts">
import { BaseContainer } from '@shared/ui';
import { ShopList } from '@widgets/shop-list';
import HomePageBanner from './HomePageBanner.vue';
</script>

<template>
  <BaseContainer>
    <HomePageBanner />
    <ShopList />
  </BaseContainer>
</template>
