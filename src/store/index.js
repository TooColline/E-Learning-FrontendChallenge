import Vue from "vue";
import Vuex from "vuex";

// STORE MODULES
import { RootModule } from "./root";
import { OnboardingModule } from "./modules/onboarding";

Vue.use(Vuex);

export default new Vuex.Store({
  ...RootModule,
  modules: {
    onboarding: OnboardingModule
  }
});
