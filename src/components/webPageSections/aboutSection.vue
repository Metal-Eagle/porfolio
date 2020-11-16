<template>
  <!-- START WELCOME SECTION -->
  <section id="welcome-section" class="welcome-section">
    <!-- Add yourname -->
    <div class="row">
      <div class="h1 col-sm">Hey I am {{ userName }}</div>
    </div>
    <div class="row">
      <div class="col-sm">
        {{ subtitle }}
      </div>
    </div>
  </section>
  <!-- END WELCOME SECTION -->
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Your Name Here",
    },
    subtitle: {
      type: String,
      default: "Your Own text here",
    },
  },
};
</script>