<template>
  <div
    class="h-screen w-full mx-auto max-w-[1200px] bg-base-100 text-primary p-6 space-y-5"
  >
    <h2 class="text-4xl text-center">Frans' & Energy Machines' ToDo-list</h2>

    <div class="flex flex-col w-full items-center">
      <section class="flex flex-col space-y-3 w-full">
        <div class="flex justify-center items-center space-x-3">
          <input
            type="text"
            placeholder="Name of todo"
            class="input input-primary w-full max-w-sm"
            v-model="inputText"
          />

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Completed</span>
              <input
                v-model="completed"
                type="checkbox"
                class="checkbox checkbox-primary ml-2"
              />
            </label>
          </div>
        </div>

        <button
          @click="addTodo({ name: inputText, state: completed })"
          class="btn btn-primary w-fit m-auto"
          :disabled="!inputText"
        >
          Add ToDo
        </button>
      </section>
    </div>

    <h2 class="text-2xl text-center">Projects</h2>
    <Collapsable
      v-for="(project, i) in projects"
      :key="i"
      :title="project.name"
      :id="project.id"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getProjects } from "../services";
import { Project as ProjectsType, Page as PageType } from "../models/index";

import Collapsable from "../components/Collapsable.vue";

const inputText = ref("");
const completed = ref(false);
const projects = ref<ProjectsType[]>([]);
const page = ref<PageType>();

onMounted(async (): Promise<void> => {
  projects.value = await getProjects();
});

function addTodo(todoObject: { name: string; state: boolean }): void {
  page.value?.children.push(todoObject);
  inputText.value = "";
}
</script>
