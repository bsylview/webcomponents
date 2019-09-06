<template>
  <div id="app">
    <HeaderComponent :logo="logo" />
    <VueCard @onSelect="onSelect" />
    <LitCard @onSelect="onSelect" />
    <ReactCard @onSelect="onSelect" />
    <AngularCard @onSelect="onSelect" />
  </div>
</template>

<script>
import VueCard from "./components/VueCardComponent.vue";
import LitCard from "./components/LitCardComponent.vue";
import ReactCard from "./components/ReactCardComponent.vue";
import AngularCard from "./components/AngularCardComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

import logo from "./assets/logos/vue.svg";

export default {
  name: "app",
  components: {
    HeaderComponent,
    VueCard,
    LitCard,
    ReactCard,
    AngularCard
  },
  data: function() {
    return {
      logo: logo
    };
  },
  methods: {
    onSelect(event) {
      this.logo = event.details.selectedLogo;
    }
  }
};
</script>
