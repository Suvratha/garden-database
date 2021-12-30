<template>
  <v-container>
    <v-row>
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
    </v-row>
    <v-row>
      <v-col cols="12"> <b> Description: </b>{{ plant.description }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"> <b> Fertilizer: </b>{{ plant.fertilizer }} </v-col>
      <v-col cols="4">
        <b> Fertilizer Period: </b>{{ plant.fertilizerperiod }}
      </v-col>
      <v-col cols="4"> <b> Insecticides: </b>{{ plant.insecticides }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> <b> Notes: </b>{{ plant.notes }} </v-col>
    </v-row>
    <!-- </v-card> -->
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
