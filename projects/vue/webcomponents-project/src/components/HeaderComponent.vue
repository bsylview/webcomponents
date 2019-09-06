<template>
  <div class="wrapper">
    <h1>Using WebComponents in Vue.js</h1>
    <h2>Selected</h2>
    <img class="mainLogo" :src="logo" />
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    logo: String
  }
};
</script>

<style>
.wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  text-align: center;
}

.mainLogo {
  height: 7rem;
  justify-self: center;
}
</style>
