<template>
  <div id="d">
    <top-nav></top-nav>
    <div id="core">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/Dashboard/TopNav.vue";
export default {
  name: "dashboard",
  components: { TopNav }
};
</script>

<style lang="scss">
@import "~@/assets/styles/_variables";

#d {
  height: 100%;
}
</style>
