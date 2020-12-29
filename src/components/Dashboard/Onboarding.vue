<template>
  <v-container class="onboarding-view mt-10">
    <v-row v-if="!$route.params.id">
      <v-col md="6" cols="12" class="d-flex align-center">
        <div>
          <h3>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </h3>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Consectetur impedit iste non numquam quos sapiente.
          </p>
        </div>
      </v-col>
      <v-col class="col-12 col-md-6">
        <div class="pa-16 d-flex flex-column onboarding-cta grey lighten-3">
          <v-icon class="initialIcon mt-8">mdi-trophy</v-icon>
          <div class="text-center w-full mt-14 mb-8">
            <v-btn
              color="grey darken-1 white--text"
              :to="{ name: 'ProgressSteps', params: { id: '1' } }"
              >Get Started</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <router-view :key="$route.path" />
    <v-row v-if="parseInt($route.params.id) > 0">
      <v-col md="6" class="d-flex align-center">
        <div class="d-flex align-center">
          <v-icon
            :disabled="parseInt($route.params.id) === 1"
            @click="goBack"
            class="mr-2"
            >mdi-arrow-left-circle-outline</v-icon
          >
          <Progress
            v-for="item in maxSteps"
            :key="item.id"
            class="d-flex align-center mr-2"
            :class="{ active: item.isActive }"
          />
        </div>
      </v-col>
      <v-col
        md="6"
        class="d-flex align-center"
        v-if="parseInt($route.params.id) === 1"
      >
        <v-btn
          color="grey darken-1 white--text ml-8"
          :to="{ name: 'ProgressSteps', params: { id: '2' } }"
          >Proceed</v-btn
        >
      </v-col>
      <v-col
        md="6"
        class="d-flex align-center"
        v-if="parseInt($route.params.id) === 2"
      >
        <p class="grey--text mb-0">FINALIZE</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Progress from "@/components/Dashboard/Progress";
export default {
  name: "Onboarding",
  components: { Progress },
  data() {
    return {
      step: 0,
      maxSteps: [
        { id: 1, value: 1, isActive: false },
        { id: 2, value: 2, isActive: false },
        { id: 3, value: 3, isActive: false },
        { id: 4, value: 4, isActive: false },
        { id: 5, value: 5, isActive: false }
      ]
    };
  },
  watch: {
    $route: {
      deep: true,
      handler({ params }) {
        if (params.id) {
          this.progressStatus(parseInt(params.id));
        }
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.progressStatus(parseInt(this.$route.params.id));
    }
  },
  methods: {
    progressStatus(step) {
      this.step = step;
      let activeStep = this.maxSteps.find(el => el.value === step);
      activeStep.isActive = true;
      this.setInactiveStep(step);
    },
    goBack() {
      let activeStep = this.maxSteps.find(
        el => el.value === parseInt(this.$route.params.id) - 1
      );
      activeStep.isActive = true;
      this.step = parseInt(this.$route.params.id) - 1;
      this.setInactiveStep(this.step);
      this.$router.replace({ params: { id: `${this.step}` } });
    },
    setInactiveStep(step) {
      let inActiveStep = this.maxSteps.find(el => el.value !== step);
      inActiveStep.isActive = false;
    }
  }
};
</script>

<style lang="scss">
.active {
  width: 2.4rem !important;
  background-color: darkgray !important;
}
.secondStep {
  height: 20rem;
  overflow-y: auto;
  .secondStepChoices {
    width: 100%;
    cursor: pointer;
  }
}
.thirdStepCta {
  width: 100%;
}
</style>
