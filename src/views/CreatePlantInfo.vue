<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Plant name" v-model="plant.name" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Description" v-model="plant.description" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Water requirement" v-model="plant.water" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Fertilizer" v-model="plant.fertilizer" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Insecticides" v-model="plant.insecticides" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Sun-light" v-model="plant.sunlight" outlined shaped />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" sm="4">
        <v-btn v-on:click="submit">Submit</v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn>Cancel</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Service from "Service";

export default {
  name: "GardenList",
  data: () => {
    return {
      plant: {},
    };
  },
  methods: {
    submit: function () {
      Service.create(this.plant);
      console.log("Successfully created");
      this.plant = {};
    },
  },
};
</script>
