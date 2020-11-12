<template>
  <!-- PROJECT START -->
  <section id="projects" class="projects-section">
    <div class="row pb-5">
      <h2 class="title">These are some of my projects</h2>
    </div>

    <div
      class="row"
      v-for="rowIdx in Math.ceil(projects.length / maxItemsInRows)"
      :key="rowIdx"
    >
      <div class="row card-deck text-center">
        <div
          class="card pd-5 mt-5"
          v-for="project in projects.slice(
            maxItemsInRows * (rowIdx - 1),
            maxItemsInRows * rowIdx
          )"
          :key="project.id"
        >
          <projectShow
            :name="project.name"
            :description="project.description"
            :image="project.image"
            :website="project.website"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- PROJECT END -->
</template>

<script>
import projectShow from "./projectShow";

export default {
  data() {
    return {
      maxItemsInRows: 4,
    };
  },
  props: {
    projects: {
      type: Array,
    },
  },
  components: {
    projectShow,
  },
};
</script>
