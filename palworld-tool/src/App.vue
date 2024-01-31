//App.vue
<template>
  <v-app>
    <v-main>
      <PalTable />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import PalTable from "./components/PalTable.vue";
import { ref } from "vue";
const tab = ref<number | null>(null);
</script>
