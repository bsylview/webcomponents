<template>
  <div class="card">
    <div class="header">
      <img alt="Logo" class="logo" v-bind:src="logo" />
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="body">
      {{ body }}
    </div>
    <div class="footer">
      <button class="button" @click="onClick">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    button: String,
    logo: String
  },
  methods: {
    onClick(event) {
      this.$emit("selectButton", event);
    }
  }
};
</script>

<style scoped>
@import "./WebComponent.scss";
</style>
