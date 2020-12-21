<template>
  <v-container class="onboarding-view mt-10">
    <v-row v-if="step === 0">
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
            <v-btn color="grey darken-1 white--text" @click="progressStatus(1)"
              >Get Started</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="step === 1">
      <v-col md="6" cols="12" class="d-flex align-center">
        <div>
          <v-icon class="starIcon mb-7">mdi-star</v-icon>
          <h3>
            Are you ready to <br />
            register?
          </h3>
          <p class="mt-4 mb-14">
            Kindly Answer the questions on the side.
          </p>
        </div>
      </v-col>
      <v-col class="col-12 col-md-6">
        <div class="secondStep d-flex flex-column w-full">
          <div
            class="d-flex align-content-center mb-2"
            v-for="item in secondQuestionChoices"
            :key="item.id"
          >
            <v-icon v-show="item.isChecked" class="mr-2">mdi-check</v-icon>
            <div
              @click="answerSecondQuestion(item.value)"
              class="secondStepChoices px-4 py-4 grey lighten-3"
              :class="{
                'grey lighten-1': item.isChecked,
                'ml-8': !item.isChecked
              }"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="step === 2">
      <v-col md="6" cols="12" class="d-flex align-center">
        <div>
          <v-icon class="starIcon mb-7">mdi-progress-clock</v-icon>
          <h3>
            This is the third step <br />
            let's set you up.
          </h3>
          <p class="mt-4 mb-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Consectetur impedit iste non numquam quos sapiente.
          </p>
        </div>
      </v-col>
      <v-col class="col-12 col-md-6 d-flex align-center">
        <div class="thirdStepCta d-flex flex-column w-full">
          <div
            class="thirdStepChoices py-5 px-5 d-flex align-content-center justify-space-between mt-2 mb-2 grey white--text"
            v-for="item in 2"
            :key="item"
          >
            <div>Ja</div>
            <v-icon class="white--text">mdi-arrow-left-circle-outline</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="step > 0">
      <v-col md="6" cols="12" class="d-flex align-center">
        <div class="d-flex align-center">
          <v-icon :disabled="step === 1" @click="goBack" class="mr-2"
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
      <v-col md="6" cols="12" class="d-flex align-center" v-if="step === 2">
        <p class="grey--text">FINALIZE</p>
      </v-col>
      <v-col md="6" cols="12" class="d-flex align-center" v-if="step === 1">
        <v-btn color="grey darken-1 white--text" @click="progressStatus(2)"
          >Proceed</v-btn
        >
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
      ],
      secondQuestionChoices: [
        { id: 1, value: "Answer 1", isChecked: false },
        { id: 2, value: "Answer 2", isChecked: false },
        { id: 3, value: "Answer 3", isChecked: false },
        { id: 4, value: "Answer 4", isChecked: false },
        { id: 5, value: "Answer 5", isChecked: false },
        { id: 5, value: "Answer 6", isChecked: false }
      ],
      selectedSecondQuestionAnswers: []
    };
  },
  // watch: {
  //   step: {
  //     handler(value) {
  //       this.progressStatus(value);
  //     }
  //   }
  // },
  methods: {
    progressStatus(step) {
      this.step = step;
      let activeStep = this.maxSteps.find(el => el.value === step);
      activeStep.isActive = true;
      this.setInactiveStep(step);
    },
    answerSecondQuestion(value) {
      this.selectedSecondQuestionAnswers.push(value);
      let selectedChoice = this.secondQuestionChoices.find(
        el => el.value === value
      );
      selectedChoice.isChecked = true;
    },
    goBack() {
      let activeStep = this.maxSteps.find(el => el.value === this.step - 1);
      activeStep.isActive = true;
      this.step = this.step - 1;
      this.setInactiveStep(this.step);
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
