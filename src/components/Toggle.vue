<template>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span
        class="label-text"
        :class="completed ? 'text-green-400' : 'text-red-400'"
        >{{ completed ? "Completed" : "Not completed" }}</span
      >
      <input
        type="checkbox"
        class="toggle toggle-primary"
        @change="completed = !completed"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const completed = ref(false);
</script>
