<template>
  <div class="hello">
    <md-card v-for="picture in pictures">
      <md-card-media>
        <img :src="picture.url" alt="">
      </md-card-media>
      <md-card-header>
        <div class="md-title">
          {{ picture.title }}
        </div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$root.catList);
  },
  name: 'hello',
  data() {
    return {
      msg: 'Hello world',
      pictures: this.$root.catList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
