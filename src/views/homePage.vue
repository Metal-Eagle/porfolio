<template>
  <section id="welcome-section" class="welcome-section">
    <div class="row">
      <div class="h1 col-sm">Hey I am {{ name }}</div>
    </div>
    <div class="row">
      <div class="col-sm">
        {{ subtitle }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  computed: {
    name() {
      return this.$store.state.name;
    },
    subtitle() {
      return this.$store.state.aboutSubtitle;
    },
  },
};
</script>
