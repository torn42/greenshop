<script setup lang="ts">
import { BaseButton, BaseContainer } from '@shared/ui';
import TheNavbar from './TheNavbar.vue';
import IconSearch from '../assets/IconSearch.vue';
import IconCart from '@shared/assets/IconCart.vue';
import IconLogin from '../assets/IconLogin.vue';
import { navbarItems } from '../consts/navbarItems';
import { useCartStore } from '@features/cart/model/cart';

const cartStore = useCartStore();
</script>

<template>
  <header class="w-full border-b border-[#dadddb]">
    <BaseContainer>
      <div class="h-full w-full flex justify-between items-center">
        <div>
          <RouterLink to="/" class="flex gap-2.5 items-center py-6">
            <img src="../assets/logo.svg" class="w-8 h-8" />
            <span class="text-[#46A358] font-bold text-2xl">GREENSHOP</span>
          </RouterLink>
        </div>

        <TheNavbar :items="navbarItems" />

        <div class="flex gap-7 items-center py-6">
          <div class="flex gap-7 items-center">
            <IconSearch class="size-6" />
            <RouterLink to="/cart">
              <div class="relative">
                <IconCart class="size-6" />
                <div
                  class="absolute top-0 -right-1 font-medium text-white bg-[#46A358] text-[10px] size-3.5 flex items-center justify-center shrink-0 rounded-full border-2 border-white"
                >
                  {{ cartStore.cart.length }}
                </div>
              </div>
            </RouterLink>
          </div>

          <BaseButton>
            <IconLogin />

            Login
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
