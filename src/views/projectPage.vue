<template>
  <div class="row project-section">
    <p class="h1">{{ getProject.name }}</p>

    <div class="col-auto" v-show="getProject.image">
      <img
        class="img-fluid custom-project"
        :src="`/assets/${getProject.image}`"
      />
    </div>

    <p>{{ getProject.description }}</p>
    <router-link class="btn btn-secondary" to="/projects"> Back </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    getProject() {
      const projectId = this.$route.params.projectId;
      const projects = this.$store.state.projects;
      const project = projects.find((r) => r.id === +projectId);
      return project;
    },
  },
};
</script>
