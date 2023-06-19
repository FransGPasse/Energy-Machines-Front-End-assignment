<template>
  <div class="card bg-base-300">
    <div class="card-body">
      <h2 class="card-title text-xl">
        {{ name }}
      </h2>
      <Toggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import Toggle from "../components/Toggle.vue";

defineProps({
  name: String,
});
</script>
