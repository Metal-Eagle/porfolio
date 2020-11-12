<template>
  <!-- Add NavBar -->
  <navBar
    :githubWebsite="appSettings.githubWebsite"
    :linkedInWebsite="appSettings.linkedInWebsite"
  />
  <!-- Add AboutSection -->
  <aboutSection
    :userName="appSettings.name"
    :subtitle="appSettings.aboutSubtitle"
  />
  <!-- Add projectSection -->
  <projectsSection :projects="appSettings.projects" />
  <!-- Add contactSection -->
  <contactSection
    :githubWebsite="appSettings.githubWebsite"
    :linkedInWebsite="appSettings.linkedInWebsite"
    :title="appSettings.contactTitle"
    :text="appSettings.contactText"
  />
  <!-- Add footerSection -->
  <footerSection :userName="appSettings.name" />
</template>

<script>
//import reactive form vue
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
      name: "Jeroen",
      aboutSubtitle:
        "I am a junior developer always looking for new things to learn",
      contactTitle: "Let's work together...",
      contactText: "How do you take your coffee?",
      githubWebsite: "https://github.com/Metal-Eagle",
      linkedInWebsite: "https://www.linkedin.com/in/jeroen-hof-98725111b/",
      projects: [
        {
          id: 1,
          name: "Phone App For Speedbooks",
          website: "",
          description:
            "The telephone application is used with the Speedbooks Software, to see who is calling, in addition there is a function to send standard emails to customers",
          image: "PhoneApp.png",
        },
        {
          id: 2,
          name: "Game Collector",
          website: "",
          description:
            "This application was created for my hobby to keep track of what is in my game collection.",
          image: "GameCollector.png",
        },
        {
          id: 3,
          name: "Protofolio website",
          website: "",
          description:
            "the website you are on at the moment is also made by me, and yes it is a pun",
          image: "protofolio.png",
        },
      ],
    });
    return {
      appSettings,
    };
  },
};
</script>
