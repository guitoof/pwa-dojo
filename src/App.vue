<template>
  <div id="app">
    <md-card :pictures="data.pictures"></md-card>
  </div>
</template>

<script>
import Data from './data';

export default {
  name: 'app',
  data() {
    return {
      data: Data,
    };
  },
};
</script>

<style>
</style>
