<template>
      <footer>
        © 2020 - {{ yearToDay }} Created for
        <a target="_blank"> {{ userName }} <Kettle class="icon"/></a>
    </footer>
</template>

<script>
import { Kettle } from "mdue";

export default {
computed: {
  yearToDay() {
    let date = new Date()
    return date.getUTCFullYear()
  }
},
  components: {
    Kettle
  },
props: {
    userName: {
      type: String,
      default: "Your Name Here"
    },
},
}
</script>
