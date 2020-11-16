<template>
  <h5 class="card-header">{{ name }}</h5>
  <br />
  <div class="col-auto" v-show="image">
    <img class="img-fluid custom-project" :src="`/assets/${image}`" />
  </div>

  <div class="card-body">
    <p class="card-text">{{ description }}</p>
    <router-link class="card-link" :to="`/project/${id}`"
      >More info</router-link
    >
    <a v-show="website" :href="website" class="card-link" target="_blank"
      >Go to project page</a
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>