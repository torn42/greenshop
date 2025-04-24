<script setup lang="ts">
import IconClose from '../assets/IconClose.vue';

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 size-full bg-black/40 flex items-center justify-center"
  >
    <div class="bg-white relative w-1/3 min-h-1/2">
      <slot></slot>
      <IconClose
        @click="emit('close')"
        class="absolute top-2 right-2 size-4.5 cursor-pointer"
      />
    </div>
  </div>
</template>
