<template>
  <div id="app" class="app">
    <VueWebComponent
      title="Welcome from Vue.js WebComponent"
      body="Body"
      button="Choose Vue.js!"
    />
  </div>
</template>

<script>
import VueWebComponent from "./components/VueWebComponent.vue";

export default {
  name: "app",
  components: {
    VueWebComponent
  }
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}
</style>
