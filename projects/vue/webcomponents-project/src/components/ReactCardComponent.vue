<template>
  <react-card-component
    title="Welcome from React WebComponent"
    :logo="logo"
    button="Log event from React!"
    @onSelect="onSelect"
  >
    <slot></slot>
  </react-card-component>
</template>

<script>
import reactLogo from "../assets/logos/react.svg";

export default {
  name: "ReactCard",
  data: function() {
    return {
      logo: reactLogo
    };
  },
  methods: {
    onSelect(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      this.$emit("onSelect", { details: { selectedLogo: reactLogo } });
    }
  }
};
</script>
