<template>
  <vue-card-component
    title="Welcome from Vue WebComponent"
    :logo="logo"
    button="Log event from Vue.js!"
    @selectButton="selectButton"
  >
    <slot></slot>
  </vue-card-component>
</template>

<script>
import vueLogo from "../assets/logos/vue.svg";

export default {
  name: "VueCard",
  data: function() {
    return {
      logo: vueLogo
    };
  },
  methods: {
    selectButton(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      this.$emit("onSelect", { details: { selectedLogo: vueLogo } });
    }
  }
};
</script>
