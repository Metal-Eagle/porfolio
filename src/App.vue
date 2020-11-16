
<template>
  <!-- Add NavBar -->
  <navBar />

  <div class="pt-5">
    <router-view />
  </div>
  <footerComponent />
</template>

<script>
// import navBar
import navBar from "@/components/navBar";

// import footer
import footerComponent from "@/components/footer";

export default {
  name: "HomePage",
  components: {
    navBar,
    footerComponent,
  },
};
</script>
