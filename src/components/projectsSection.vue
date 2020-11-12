<template>
  <!-- PROJECT START -->
  <section id="projects" class="projects-section">
    <div class="row pb-5">
      <h2 class="title">These are some of my projects</h2>
    </div>

    <div class="row">
      <div class="projects-grid" id="listOfProjects">
        <div class="row card-deck mb-6 text-center">
          <div class="card" v-for="project in projects" :key="project.id">
            <h5 class="card-header">{{ project.name }}</h5>
            <br />
            <div
              class="col-auto d-none d-sm-block"
              v-show="project.image !== null"
            >
              <img
                class="img-fluid custom-project"
                :src="`/assets/${project.image}`"
              />
            </div>

            <div class="card-body">
              <p class="card-text">{{ project.description }}</p>
              <a
                v-show="project.website"
                :href="project.website"
                class="card-link"
                >Go somewhere</a
              >
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
  props: {
    projects: {
      type: Array,
    },
  },
};
</script>
