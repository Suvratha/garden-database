<template>
  <v-data-table :headers="headers" :items="plants" :items-per-page="10" class="elevation-1"></v-data-table>
</template>

<script>
import Service from "Service";

export default {
  name: "GardenList",
  data: () => {
    return {
      headers: [
        {
          text: "Plants",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Description", value: "description" },
        { text: "Water", value: "water" },
        { text: "SunLight", value: "sunlight" },
        { text: "Fertilizer", value: "fertilizer" },
        { text: "Fertilizing Period", value: "fertilizerperiod" },
        { text: "Insecticides", value: "insecticides" },

        { text: "Notes", value: "notes" },
      ],
      plants: [],
    };
  },
  created: function () {
    const promise = Service.read();
    promise.then((result) => (this.plants = result));
  },
};
</script>
