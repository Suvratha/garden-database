<template>
  <v-data-table
    :headers="headers"
    :items="plants"
    :items-per-page="10"
    class="elevation-1"
    show-expand
    @click:row="onClickHandler"
  >
  </v-data-table>
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
        { text: "Water", value: "water" },
        { text: "SunLight", value: "sunlight" },
      ],
      plants: [],
    };
  },
  created: function() {
    const promise = Service.read();
    promise.then((result) => (this.plants = result));
  },
  methods: {
    onClickHandler: function(item) {
      this.$router.push(`/details/${item.name}`);
    },
  },
};
</script>
