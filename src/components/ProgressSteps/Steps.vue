<template>
  <div>
    <v-row v-if="$route.params.id === '1'">
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
    <v-row v-if="$route.params.id === '2'">
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
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      secondQuestionChoices: [
        { id: 1, value: "Answer 1", isChecked: false },
        { id: 2, value: "Answer 2", isChecked: false },
        { id: 3, value: "Answer 3", isChecked: false },
        { id: 4, value: "Answer 4", isChecked: false },
        { id: 5, value: "Answer 5", isChecked: false },
        { id: 6, value: "Answer 6", isChecked: false }
      ],
      selectedSecondQuestionAnswers: []
    };
  },
  methods: {
    answerSecondQuestion(value) {
      this.selectedSecondQuestionAnswers.push(value);
      let selectedChoice = this.secondQuestionChoices.find(
        el => el.value === value
      );
      selectedChoice.isChecked = true;
    }
  }
};
</script>

<style></style>
