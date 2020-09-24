<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">Material Design com Vue.js 2</div>
        <div class="md-subhead">Curso da Udemy</div>
      </md-card-header>
      <md-card-content>
        <md-button class="md-raised md-primary" @click="table()">
          Table
        </md-button>
        <md-button class="md-raised md-primary" v-on:click="limpar()">
          Limpar
        </md-button>
      </md-card-content>

      <md-table>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Sobrenome</md-table-head>
          <md-table-head>Email</md-table-head>
        </md-table-row>
        <md-table-row v-for="contato in contatos">
          <md-table-cell>{{ contato.nome }}</md-table-cell>
          <md-table-cell>{{ contato.sobrenome }}</md-table-cell>
          <md-table-cell>{{ contato.email }}</md-table-cell>
        </md-table-row>
      </md-table>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return {
      contatos: [
        {
          nome: "Eduardo",
          sobrenome: "Amroginski",
          email: "eduardo@gmail.com",
        },
        { nome: "Felipe", sobrenome: "Dias", email: "felipe@gmail.com" },
        {
          nome: "Garibaldo",
          sobrenome: "Soares",
          email: "garibaldo@gmail.com",
        },
      ],
    };
  },
  methods: {
    table: function () {
      this.contatos.push({
        nome: "Sebastian",
        sobrenome: "Richards",
        email: "sebastian@gmail.com",
      });
      this.contatos.push({
        nome: "Bill",
        sobrenome: "Smith",
        email: "bill@gmail.com",
      });
      this.contatos.push({
        nome: "Elle",
        sobrenome: "Sputnik",
        email: "elle@gmail.com",
      });
    },
    limpar: function () {
      this.contatos.splice(0, this.contatos.length);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
