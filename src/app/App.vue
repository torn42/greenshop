<script setup lang="ts">
import { TheHeader } from '@widgets/header';
import { BaseLayout } from '@shared/ui';
</script>

<template>
  <BaseLayout>
    <template #header><TheHeader /></template>

    <RouterView />

    <template #footer></template>
  </BaseLayout>
</template>
