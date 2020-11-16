
<template>
  <!-- Add NavBar -->
  <navBar />

  <div class="pt-5">
    <router-view />
  </div>
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
