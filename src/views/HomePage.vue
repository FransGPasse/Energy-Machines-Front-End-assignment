<template>
  <div
    class="h-screen w-full mx-auto max-w-[1200px] bg-base-100 text-primary p-6 space-y-5"
  >
    <h2 class="text-4xl text-center underline underline-offset-3">
      Frans' & Energy Machines' ToDo-list
    </h2>
    <h3 class="text-3xl text-center">All projects</h3>
    <Collapsable v-for="(project, i) in projects" :key="i" v-bind="project" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getProjects } from "../services";
import { Project as ProjectsType } from "../models/index";
import Collapsable from "../components/Collapsable.vue";

const projects = ref<ProjectsType[]>([]);

onMounted(async (): Promise<void> => {
  projects.value = await getProjects();
});
</script>
