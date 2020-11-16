<template>
  <section id="contact" class="contact-section">
    <div class="row">
      <div class="contact-section-header">
        <div class="h1">{{ title }}</div>
        <div class="p">{{ text }}</div>
      </div>
    </div>
    <div class="row">
      <div class="contact-links">
        <a :href="githubWebsite" target="_blank" class="alert-link">
          <Github class="icon" /> GitHub
        </a>
      </div>

      <div class="contact-links">
        <a :href="linkedInWebsite" class="alert-link" target="_blank">
          <Linkedin class="icon" /> LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { Github, Linkedin } from "mdue";

export default {
  components: {
    Github,
    Linkedin,
  },
  computed: {
    yearToDay() {
      let date = new Date();
      return date.getUTCFullYear();
    },
    githubWebsite() {
      return this.$store.state.githubWebsite;
    },
    linkedInWebsite() {
      return this.$store.state.linkedInWebsite;
    },
    title() {
      return this.$store.state.contactTitle;
    },
    text() {
      return this.$store.state.contactText;
    },
    userName() {
      return this.$store.state.name;
    },
  },
};
</script>
