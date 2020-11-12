<template>
  <footer>
    <div class="row">
      <div class="col-auto">
        © 2020 - {{ yearToDay }} Created for {{ userName }}
      </div>
      <div class="col-1">
        <Kettle class="icon" />
      </div>
    </div>
  </footer>
</template>

<script>
import { Kettle } from "mdue";

export default {
  computed: {
    yearToDay() {
      let date = new Date();
      return date.getUTCFullYear();
    },
  },
  components: {
    Kettle,
  },
  props: {
    userName: {
      type: String,
      default: "Your Name Here",
    },
  },
};
</script>
