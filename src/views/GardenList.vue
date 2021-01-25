<template>
  <v-data-table
    :headers="headers"
    :items="plants"
    :items-per-page="10"
    class="elevation-1"
    show-expand
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <h2>More info about {{ item.name }}:</h2>
        <v-row>
          <v-col cols="3"> Description: {{ item.description }} </v-col>
          <v-col cols="3"> Fertilizer: {{ item.fertilizer }} </v-col>
          <v-col cols="3">
            Fertilizer Period: {{ item.fertilizerperiod }}
          </v-col>
          <v-col cols="3"> Insecticides: {{ item.insecticides }} </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"> Notes: {{ item.notes }} </v-col>
        </v-row>
        <!-- </v-card> -->
      </td>
    </template>
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
  created: function () {
    const promise = Service.read();
    promise.then((result) => (this.plants = result));
  },
};
</script>
