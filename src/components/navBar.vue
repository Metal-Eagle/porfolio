<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="navbar">
    <a class="navbar-brand" href="#">Home</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class=" navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#projects">projects</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>


      </ul>
      <div class="form-inline my-2 my-lg-0">
        <a :href="githubWebsite" target="_blank" c>
        <Github class="icon" />
        </a>
        <a :href="linkedInWebsite" target="_blank" c>
        <Linkedin class="icon" />
        </a>     
      </div>

    </div>
  </nav>
</template>

<script>
import { Github,Linkedin } from 'mdue';

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
      Linkedin
    },
}
</script>

<style scoped>
.navbar {
  background-color: var(--navbar-color);
  color: var(--letter-color);
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  color: white;
  font-family: "Exo 2", sans-serif;
  padding: 1em;
}
</style>