<template>
  <div>
    <top-nav></top-nav>
    <onboarding></onboarding>
  </div>
</template>

<script>
import TopNav from "@/components/Dashboard/TopNav.vue";
import Onboarding from "@/components/Dashboard/Onboarding";
export default {
  name: "dashboard",
  components: { TopNav, Onboarding }
};
</script>

<style lang="scss">
@import "~@/assets/styles/_variables";
</style>
