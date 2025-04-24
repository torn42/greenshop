<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { NavItem } from '../model/types';

defineProps<{
  items: NavItem[];
}>();

const route = useRoute();
</script>

<template>
  <nav>
    <ul class="flex gap-12">
      <li v-for="item in items" :key="item.id">
        <RouterLink
          v-if="item.active"
          :to="item.link"
          :class="{ 'font-bold': route.path === item.link }"
        >
          {{ item.title }}
        </RouterLink>
        <div v-else :class="{ 'font-bold': route.path === item.link }">
          {{ item.title }}
        </div>
      </li>
    </ul>
  </nav>
</template>
