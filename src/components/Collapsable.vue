<template>
  <div class="collapse bg-secondary rounded-xl">
    <input
      type="checkbox"
      v-on="!page ? {click : () => getPagesByProjectId(id!)} : {}"
    />
    <div class="collapse-title text-xl font-medium">
      {{ title }}
    </div>
    <div
      class="collapse-content grid gap-4 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        v-for="(child, i) in page?.children"
        :key="i"
        class="card"
        :name="child.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPages } from "../services";
import { Page as PageType } from "../models/index";
import Card from "../components/Card.vue";
import { ref } from "vue";

defineProps({
  title: String,
  id: String,
});

const page = ref<PageType>();

async function getPagesByProjectId(id: string): Promise<void> {
  page.value = await getPages(id);
}
</script>
