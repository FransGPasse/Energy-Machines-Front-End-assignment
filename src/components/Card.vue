<template>
  <div class="card bg-base-300">
    <div class="card-body">
      <h2 class="card-title text-xl">
        {{ name }}
      </h2>
      <span class="badge" :class="state ? 'badge-success' : 'badge-error'">
        {{ state ? "Completed" : "Not completed" }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  state: Boolean,
});
</script>

<style scoped></style>
