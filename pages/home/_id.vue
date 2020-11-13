<template>
  <div>
    <div style="display: flex">
      <img v-for="image in home.images" :key="image" :src="image" alt="" width="200" height="150" />
    </div>
    {{ home.title }}<br />
    <img src="/images/marker.svg" alt="" width="20" height="20">
    {{ home.location.address }} {{ home.location.state }} {{ home.location.country }}<br />
    <img src="/images/star.svg" alt="" width="20" height="20">
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath

  </div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  head() {
    return {
      title: this.home.title
    };
  },
  data() {
    return {
      home: {}
    };
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id);
    this.home = home;
  }
};
</script>

<style scoped>

</style>
