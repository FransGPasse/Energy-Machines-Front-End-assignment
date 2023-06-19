<template>
  <div class="collapse collapse-plus bg-secondary rounded-xl">
    <input
      type="checkbox"
      v-on="!page ? { click: () => getPagesByProjectId(id!) } : {}"
    />
    <div class="collapse-title text-2xl font-medium text-center">
      {{ name }}
    </div>
    <div class="collapse-content">
      <div class="flex flex-col">
        <div class="flex justify-center items-center">
          <label class="label text-lg">Add a todo</label>
          <input
            type="text"
            placeholder="Name of todo"
            class="input input-primary w-full max-w-sm focus:outline-none"
            v-model="inputText"
          />
        </div>

        <button
          @click="addTodo({ name: inputText })"
          class="btn btn-primary w-fit m-auto mt-2 mb-8"
          :disabled="!inputText"
        >
          Add ToDo
        </button>
      </div>
      <div
        class="grid gap-4 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card
          v-for="(child, i) in page?.children"
          :key="i"
          class="card"
          :name="child.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPages } from "../services";
import { Page as PageType } from "../models/index";
import Card from "../components/Card.vue";
import { ref } from "vue";

defineProps({
  name: String,
  id: String,
});

const inputText = ref("");
const page = ref<PageType>();

async function getPagesByProjectId(id: string): Promise<void> {
  page.value = await getPages(id);
}

function addTodo(todoObject: { name: string }): void {
  page.value?.children.push(todoObject);
  inputText.value = "";
}
</script>
