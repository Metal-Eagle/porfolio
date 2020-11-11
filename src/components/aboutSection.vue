<template>
  <!-- START WELCOME SECTION -->
  <section id="welcome-section" class="welcome-section">
    <!-- Add yourname -->
    <h1>Hey I am {{ userName }}</h1> 
     
  </section>
  <!-- END WELCOME SECTION -->
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Your Name Here"
    },
  },
};
</script>