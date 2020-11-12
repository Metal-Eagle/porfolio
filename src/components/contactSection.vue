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
  props: {
    githubWebsite: {
      type: String,
      default: "https://github.com/",
    },
    linkedInWebsite: {
      type: String,
      default: "https://www.linkedin.com/feed/",
    },
    title: {
      type: String,
      default: "Let's work together...",
    },
    text: {
      type: String,
      default: "How do you take your coffee?",
    },
  },
  components: {
    Github,
    Linkedin,
  },
};
</script>
