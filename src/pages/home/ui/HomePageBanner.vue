<script setup lang="ts">
import { BaseButton } from '@shared/ui';
</script>

<template>
  <article class="px-8 w-full flex justify-between items-center">
    <section class="flex flex-col gap-10 max-w-1/2 items-start">
      <div class="flex flex-col gap-2">
        <span class="uppercase text-[#3D3D3D] font-medium tracking-wider"
          >Welcome to GreenShop
        </span>
        <h1
          class="uppercase text-7xl font-extrabold text-[#3D3D3D] break-words"
        >
          Let’s Make a Better <span class="text-[#46A358]">Planet</span>
        </h1>
        <p class="text-[#727272] leading-6">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
      </div>

      <BaseButton to="/" class="uppercase text-bold">SHOP NOW</BaseButton>
    </section>
    <section>
      <img
        src="../assets/plant.png"
        alt="plant image"
        width="auto"
        height="auto"
      />
    </section>
  </article>
</template>
