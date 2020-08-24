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
      <v-col cols="4">
        <v-select
          filled
          label="Water requirement"
          :items="waterrequirement"
          v-model="plant.water"
          outlined
          shaped
        />
      </v-col>
      <v-col cols="4">
        <v-select
          label="Sun light per day"
          :items="sunlight"
          filled
          v-model="plant.sunlight"
          outlined
          shaped
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-combobox
          filled
          label="Fertilizer"
          :items="fertilizer"
          v-model="plant.fertilizer"
          multiple
          outlined
          shaped
        />
      </v-col>
      <v-col cols="4">
        <v-select
          filled
          label="Fertilizing period"
          :items="fertilizerperiod"
          v-model="plant.fertilizerperiod"
          outlined
          shaped
        />
      </v-col>
      <v-col cols="4">
        <v-select
          label="Insecticides"
          :items="insecticides"
          filled
          v-model="plant.insecticides"
          outlined
          shaped
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Notes" v-model="plant.notes" outlined shaped />
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
  name: "CreatePlantInfo",
  data: () => {
    return {
      plant: {},
      waterrequirement: [
        "Daily",
        "Once in two Days",
        "When surface is dry",
        "When 1 inch below surface is dry",
        "Weekly",
      ],
      fertilizer: [
        "Balanced, all purpose, Liquid",
        "222(NPK)",
        "242(NPK)",
        "422(NPK)",
        "224(NPK)",
        "442(NPK)",
        "244(NPK)",
        "424(NPK)",
      ],
      sunlight: [
        "2 hours",
        "3 hours",
        "3-4 hours",
        "4-5 hours",
        "5 hours",
        "8 hours",
      ],
      insecticides: ["neem oil"],
      fertilizerperiod: ["Weekly", "Once in 15 days", "Monthly"],
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
