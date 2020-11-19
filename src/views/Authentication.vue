<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3>Login</h3>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="username"
          v-model="input.username"
          placeholder="Username"
          required
        >
          Username
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="password"
          v-model="input.password"
          :type="show ? 'text' : 'password'"
          placeholder="Password"
          required
        >
          Password
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn type="button" v-on:click="login">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import Service from "Service";

export default {
  data: () => {
    return {
      input: {},
      show: false,
    };
  },
  methods: {
    login: function() {
      const result = Service.validateUser(this.input);
      if (result == true) {
        console.log("Successfully logged in");
      } else {
        console.log("Login fail");
      }
    },
  },
};
</script>
