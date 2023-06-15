<template>
  <div class="hero">
    <div class="hero-content flex flex-col">
      <h2 class="text-4xl">Frans Energy Machines' Todo-list</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getProjects } from "../services";

onMounted(async () => {
  const projects = await getProjects();
  console.log(projects);
});
</script>
