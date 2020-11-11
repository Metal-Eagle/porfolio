<template>
<!-- Add NavBar -->
  <navBar :githubWebsite="appSettings.githubWebsite" :linkedInWebsite="appSettings.linkedInWebsite" />
  <!-- Add AboutSection -->
  <aboutSection :userName="appSettings.Name" />
  <!-- Add projectSection -->
  <projectsSection />
    <!-- Add contactSection -->
  <contactSection :githubWebsite="appSettings.githubWebsite" :linkedInWebsite="appSettings.linkedInWebsite" />
      <!-- Add footerSection -->
  <footerSection :userName="appSettings.Name" />
</template>

<script>
import { reactive } from "vue";

// import navBar
import navBar from "./components/navBar";

// import all sections
import aboutSection from "./components/aboutSection";
import projectsSection from "./components/projectsSection";
import contactSection from "./components/contactSection";
import footerSection from "./components/footerSection";

export default {
  name: "HomePage",
  components: {
    navBar,
    projectsSection,
    aboutSection,
    footerSection,
    contactSection,
  },
  setup() {
    const appSettings = reactive({
      Name: "Jeroen",
      githubWebsite: "https://github.com/Metal-Eagle",
      linkedInWebsite: "https://www.linkedin.com/in/jeroen-hof-98725111b/",
    });
    return {
      appSettings,
    };
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
