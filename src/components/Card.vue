<template>
  <div class="card bg-base-300">
    <div class="card-body">
      <h2 class="card-title text-xl">
        {{ name }}
      </h2>
      <span
        class="badge-primary rounded-full py-1 px-2 text-center max-w-fit ml-auto"
        >{{ state }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  state: String,
});
</script>

<style scoped></style>
