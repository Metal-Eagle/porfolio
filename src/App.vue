
<template>
  <!-- Add NavBar -->
  <navBar />
  <router-view />
</template>

<script>
// import navBar
import navBar from "@/components/navBar";

export default {
  name: "HomePage",
  components: {
    navBar,
  },
};
</script>
