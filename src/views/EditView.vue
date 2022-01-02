<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Plant name" v-model="plant.name" outlined shaped />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Description"
          v-model="plant.description"
          outlined
          shaped
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-date-picker
        v-model="plant.lastWateredOn"
        class="mt-4 d-flex mr-auto"
        min="2016-06-15"
        max="2100-03-20"
      ></v-date-picker>
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
        <v-btn v-on:click="update">Update</v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn @click="$router.go(-1)">Cancel</v-btn>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :bottom="true" color="success"
      >Success!!</v-snackbar
    >
  </v-container>
</template>

<script>
import Service from "Service";
import { SUNLIGHT, WATER_REQUIREMENT, FERTILIZER, INSECTICIDES, FERTILIZER_PERIOD } from '../utils/constants';
export default {
  data: () => {
    return {
      plant: {},
      waterrequirement: WATER_REQUIREMENT,
      fertilizer: FERTILIZER,
      sunlight: SUNLIGHT,
      insecticides: INSECTICIDES,
      fertilizerperiod: FERTILIZER_PERIOD,
      snackbar: false,
    };
  },
  created: function() {
    const name = this.$route.params.name;
    Service.findByName(name).then((data) => {
      this.plant = data;
    });
  },
  methods: {
    update: function() {
      Service.update(this.plant);
      console.log("Successfully updated");
      this.snackbar = true;
      this.$router.push(`/details/${this.plant.name}`);
    },
  },
};
</script>

<style></style>
