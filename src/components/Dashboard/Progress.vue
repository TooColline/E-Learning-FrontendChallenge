<template>
  <v-progress-linear
    class="progress grey darken-1"
    value=""
  ></v-progress-linear>
</template>

<script>
export default {
  name: "Progress"
};
</script>

<style lang="scss" scoped>
.progress {
  width: 10px;
  height: 20px;
  border-radius: 10px;
  background-color: lightgray;
}
</style>
