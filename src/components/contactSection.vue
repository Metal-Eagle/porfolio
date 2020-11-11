<template>
  <section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Let's work together...</h2>
      <p>How do you take your coffee?</p>
    </div>
    <div class="contact-links">
      <a :href="githubWebsite" target="_blank" c>
        <Github class="icon" /> GitHub
      </a>
    </div>

    <div class="contact-links" >
      <a :href="linkedInWebsite" target="_blank" c>
        <Linkedin class="icon" /> LinkedIn
      </a>
    </div>
  </section>
</template>

<script>
import { Github, Linkedin } from "mdue";

export default {
    props: {
    githubWebsite: {
      type: String,
      default: 'https://github.com/'
    },
    linkedInWebsite:{
      type: String,
      default: 'https://www.linkedin.com/feed/'
    }
  },
  components: {
    Github,
    Linkedin,
  },
};
</script>
