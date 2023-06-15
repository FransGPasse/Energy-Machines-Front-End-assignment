<template>
  <div>
    <h2>Hi again!</h2>
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
