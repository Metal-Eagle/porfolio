<template>
  <h5 class="card-header">{{ name }}</h5>
  <br />
  <div class="col-auto d-none d-sm-block" v-show="image">
    <img class="img-fluid custom-project" :src="`/assets/${image}`" />
  </div>

  <div class="card-body">
    <p class="card-text">{{ description }}</p>
    <a v-show="website" :href="website" class="card-link">Go to project page</a>
  </div>
</template>

<script>
export default {
  props: {
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