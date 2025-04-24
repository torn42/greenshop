<script setup lang="ts">
defineProps<{
  to?: string;
}>();
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to ? to : undefined"
    class="bg-[#46A358] text-white flex items-center gap-1 rounded-lg py-2 px-4 font-medium cursor-pointer hover:bg-[#4b8657] transition text-center"
  >
    <slot></slot>
  </component>
</template>
