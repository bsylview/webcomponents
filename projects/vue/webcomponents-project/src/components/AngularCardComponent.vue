<template>
  <angular-card-component
    title="Welcome from Angular WebComponent"
    :logo="logo"
    button="Log event from Angular!"
    @selectButton="selectButton"
  >
    <slot></slot>
  </angular-card-component>
</template>

<script>
import angularLogo from "../assets/logos/angular.svg";

export default {
  name: "AngularCard",
  data: function() {
    return {
      logo: angularLogo
    };
  },
  methods: {
    selectButton(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      this.$emit("onSelect", { details: { selectedLogo: angularLogo } });
    }
  }
};
</script>
