<template>
  <lit-card-component
    title="Welcome from Lit WebComponent"
    :logo="logo"
    button="Log event from Lit!"
    @selectButton="selectButton"
  >
    <slot></slot>
  </lit-card-component>
</template>

<script>
import polymerLogo from "../assets/logos/polymer.svg";

export default {
  name: "LitCard",
  data: function() {
    return {
      logo: polymerLogo
    };
  },
  methods: {
    selectButton(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      this.$emit("onSelect", { details: { selectedLogo: polymerLogo } });
    }
  }
};
</script>
