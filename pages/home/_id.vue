<template>
  <div>
    <div style="display: flex">
      <img v-for="image in home.images" :key="image" :src="image" alt="" width="200" height="150" />
    </div>
    {{ home.title }}<br />
    <img src="/images/marker.svg" alt="" width="20" height="20">{{ home.location.address }} {{ home.location.state }}
    {{ home.location.country }}<br />
    <img src="/images/star.svg" alt="" width="20" height="20">{{ home.guests }} guests, {{ home.bedrooms }} rooms,
    {{ home.beds }} beds, {{ home.bathrooms }} bath
    <div style="height: 800px; width: 800px" ref="map"></div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title
    };
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },
  async asyncData({ params, $dataApi, error }) {
    const response = await $dataApi.getHome(params.id);
    if (!response.ok) return error({ statusCode: response.status, message: response.statusText });
    return {
      home: response.json
    };
  }
};
</script>

<style scoped>

</style>
