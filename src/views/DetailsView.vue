<template>
  <v-container>
    <v-row>
      <v-col cols="4"> <h1> {{ plant.name }} </h1></v-col>
      <v-col cols="8">
        <v-btn
          class="ma-2 d-flex ml-auto"
          outlined
          large
          fab
          color="primary"
          @click="onEditButtonClick"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col> 
    </v-row>
    <v-row>
      <v-col cols="12" style="border: 1px solid black"> <b> Description: </b>{{ plant.description }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" style="border: 1px solid black"> <b> Last watered on: </b>{{ plant.lastWateredOn }} </v-col>
      <v-col cols="4" style="border: 1px solid black"> <b> Water Requirement: </b>{{ plant.water }} </v-col>
      <v-col cols="4" style="border: 1px solid black">
        <b> Sunlight: </b>{{ plant.sunlight }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" style="border: 1px solid black"> <b> Fertilizer: </b>{{ plant.fertilizer }} </v-col>
      <v-col cols="4" style="border: 1px solid black">
        <b> Fertilizer Period: </b>{{ plant.fertilizerperiod }}
      </v-col>
      <v-col cols="4" style="border: 1px solid black"> <b> Insecticides: </b>{{ plant.insecticides }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="border: 1px solid black"> <b> Notes: </b>{{ plant.notes }} </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Service from "Service";
export default {
  data: () => {
    return {
      plant: {},
    };
  },
  created: function() {
    const name = this.$route.params.name;
    Service.findByName(name).then((data) => {
      this.plant = data;
    });
  },
  methods: {
    onEditButtonClick: function() {
      this.$router.push(`/edit/${this.plant.name}`);
    },
  },
};
</script>

<style></style>
