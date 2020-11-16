<template>
  <section id="text-center" class="contact-section">
    <div class="row">
      <div class="contact-section-header text-center">
        <div class="h1">{{ title }}</div>
        <div class="p">{{ text }}</div>
      </div>
    </div>
    <hr />
    <div class="row">
      <a
        :href="githubWebsite"
        target="_blank"
        class="alert-link external-links"
      >
        <Github class="icon" /> GitHub
      </a>
    </div>
    <div class="row">
      <a
        :href="linkedInWebsite"
        class="alert-link external-links"
        target="_blank"
      >
        <Linkedin class="icon" /> LinkedIn
      </a>
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
