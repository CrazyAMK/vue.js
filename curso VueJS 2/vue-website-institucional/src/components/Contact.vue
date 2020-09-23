<template>
  <div>
    <p>Endereço: {{ msg }}</p>
    <p>Telefone: {{ phone }}</p>
  </div>
</template>

<script>
export default {
  name: "contato",
  data() {
    return {
      msg: "Rua 23 cruzamento com a rua 37",
      phone: "(XX) XXXX-XXXX",
    };
  },
};
</script>

<style scoped>
</style>