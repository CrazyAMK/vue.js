<template>
  <div>
    <form v-on:submit.prevent="search">
      <input v-model="username" placeholder="Enter a github username" />
    </form>
    <p v-if="data.name && data.location">
      {{ data.name }} ({{ data.login }}) is from
      {{ data.location }}
    </p>
    <p v-else>{{ errorsMsg }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios); //Lembrar de declarar o use!!!!

export default {
  data() {
    return {
      username: "",
      data: [],
      errorsMsg: [],
    };
  },
  methods: {
    search() {
      const api = `https://api.github.com/users/${this.username}`;
      Vue.axios
        .get(api)
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch((error) => {
          this.errorsMsg = "No user or no location!";
          this.data = [];
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
