//PalTable.vue
<template>
  <v-card align="center" flat title="Pal Information">
    <v-text-field
      v-model="search"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      class="elevation-1"
      :items-per-page="10"
    >
      <template v-slot:item.imageWiki="{ item }">
        <img :src="item.imageWiki" alt="image" />
      </template>

      <template v-slot:item.name="{ item }">
        <p>{{ item.name }}</p>
      </template>

      <template v-slot:item.description="{ item }">
        <td class="description-column">{{ item.description }}</td>
      </template>

      <template v-slot:item.types="{ item }">
        <ul class="type-list">
          <li class="type-element" v-for="type in item.types" :key="type">
            <img
              :src="typeImages[type.toLowerCase()]"
              alt="#"
              style="height: 30px; width: 30px"
            />
            <p>
              {{ type }}
            </p>
          </li>
        </ul>
      </template>

      <template v-slot:item.suitability="{ item }">
        <ul class="work-list">
          <li
            class="work-element"
            v-for="suit in item.suitability"
            :key="suit.type"
          >
            <img
              :src="workImages[suit.type.toLowerCase()]"
              alt="#"
              style="height: 30px; width: 30px"
            />
            <p>{{ suit.type }} {{ suit.level }}</p>
          </li>
        </ul>
      </template>

      <template v-slot:item.skills="{ item }">
        <ul class="skill-list">
          <li v-for="skill in item.skills" :key="skill.name">
            <img
              :src="typeImages[skill.type.toLowerCase()]"
              alt=""
              style="height: 30px; width: 30px"
            />
            <p>
              <b>Level:{{ skill.level }}</b> - {{ skill.name }}
              {{ skill.power }}
            </p>
          </li>
        </ul>
      </template>
      <template v-slot:item.aura="{ item }">
        <h3 style="text-align: center">{{ item.name }}</h3>
        <p style="text-align: start">{{ item.description }}</p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { TypeImageMap } from "@/common/types/type.type";
import { IHeader } from "@/common/interfaces/header.interface";
import pals from "../assets/palsDB.json";
import {
  Dark,
  Dragon,
  Electric,
  Fire,
  Grass,
  Ground,
  Ice,
  Water,
  Neutral,
} from "../assets/imports/PalTypes";

import {
  Cooling,
  Gathering,
  Handiwork,
  Kindling,
  Lumbering,
  Medicine,
  Mining,
  Planting,
  Transporting,
  Watering,
  Farming,
  Electricity,
} from "../assets/imports/PalWorks";
const search = ref("");

const typeImages: TypeImageMap = {
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fire: Fire,
  grass: Grass,
  ground: Ground,
  water: Water,
  ice: Ice,
  neutral: Neutral,
};
const workImages: TypeImageMap = {
  cooling: Cooling,
  gathering: Gathering,
  handiwork: Handiwork,
  kindling: Kindling,
  lumbering: Lumbering,
  medicine: Medicine,
  mining: Mining,
  planting: Planting,
  transporting: Transporting,
  watering: Watering,
  farming: Farming,
  electricity: Electricity,
};

const headers = <IHeader[]>[
  {
    text: "Image",
    value: "imageWiki",
    sortable: false,
    key: "imageWiki",
    title: "Image",
    align: "center",
  },
  {
    text: "Name",
    value: "name",
    sortable: true,
    align: "center",
    key: "name",
    title: "Name",
  },
  {
    text: "Description",
    value: "description",
    sortable: true,
    key: "description",
    title: "Description",
    width: "25%",
    align: "center",
  },
  {
    text: "Types",
    value: "types",
    sortable: false,
    align: "start",
    key: "types",
    title: "Types",
  },
  {
    text: "Suitability",
    value: "suitability",
    sortable: true,
    align: "start",
    key: "suitability",
    title: "Suitability",
  },
  {
    text: "Skills",
    value: "skills",
    sortable: false,
    align: "start",
    key: "skills",
    title: "Skills",
    class: "custom-padding-class",
  },
  {
    text: "aura",
    value: "aura",
    sortable: false,
    align: "center",
    key: "aura",
    title: "aura",
    width: "20%",
  },
];

const getTypeImageUrl = (type: string) => {
  return typeImages[type.toLowerCase()];
};

const filteredItems = computed(() => {
  if (!search.value) {
    return pals;
  }
  return pals.filter((pal) => {
    return Object.keys(pal).some((key) => {
      const value = pal[key as keyof typeof pal];
      if (Array.isArray(value)) {
        return value.some((subValue) =>
          subValue.toString().toLowerCase().includes(search.value.toLowerCase())
        );
      }
      return value
        .toString()
        .toLowerCase()
        .includes(search.value.toLowerCase());
    });
  });
});
</script>

<style scoped>
li {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.work-element {
  display: flex;
  gap: 0.5rem;
}
.work-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.description-column {
  text-align: start;
}
.type-element {
  gap: 0.5rem;
}
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
}
.type-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
