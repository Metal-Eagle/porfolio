<template>
  <div id="footer" class="text-center">
    © 2020 - {{ yearToDay }} Created for {{ userName }}
    <Kettle class="icon" />
  </div>
</template>

// <script>
// import Kettle
import { Kettle } from "mdue";

export default {
  components: {
    Kettle,
  },
  computed: {
    yearToDay() {
      let date = new Date();
      return date.getUTCFullYear();
    },
    userName() {
      return this.$store.state.name;
    },
  },
};
</script>

