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
    <v-snackbar v-model="snackbar" :bottom="true" color="error"
      >Login Failed!!</v-snackbar
    >
  </v-container>
</template>
<script>
import Service from "Service";

export default {
  data: () => {
    return {
      input: {},
      show: false,
      snackbar: false,
    };
  },
  methods: {
    login: function () {
      const result = Service.validateUser(this.input);
      result
        .then(() => {
          this.$store.commit("setLogIn", result);
          this.$router.push("/list");
        })
        .catch(() => {
          this.snackbar = true;
        });
    },
  },
  mounted() {
    if (process.env.VUE_APP_DATABASE === "mock") {
      this.input = { username: "test", password: "test" };
      this.login();
    }
  },
};
</script>
