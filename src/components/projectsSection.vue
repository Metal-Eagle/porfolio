<template>
  <!-- PROJECT START -->
  <section id="projects" class="projects-section">
    <h2 class="projects-section-header">These are some of my projects</h2>

    <div class="projects-grid" id="listOfProjects">
      <!-- <div class="row">
        <div class="card"

        >
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.website" class="card-link">klik here for more info</a>
          </div>
        </div>
      </div> -->

      <div class="row">
        <div class="col-sm-6" v-for="project in projects" :key="project.id">
          <div class="card">


<!-- {{project.image}}  -->
            <div v-show="project.image !== null" >


               <img :src='project.image' width="250" />
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.website" class="card-link">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- PROJECT END -->
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Phone App For Speedbooks",
          website: "https://example.com/",
          description: "blabla",
          image: '/assets/sample.png' ,
        },
        {
          id: 2,
          name: "Game Collector",
          website: "https://example.com/",
          description: "nog een keer blabla",
          image: null,
        },
      ],
    };
  },
};
</script>
