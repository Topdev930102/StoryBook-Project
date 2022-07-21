export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "!style-loader!css-loader!sass-loader!../src/style/global.scss";
import "bootstrap-icons/font/bootstrap-icons";
import { BFormCheckbox } from "bootstrap-vue";

import { BAvatar, BCard } from "bootstrap-vue";
import { BBadge, BButton } from "bootstrap-vue";
import { BProgress } from "bootstrap-vue";
import { BModal } from "bootstrap-vue";
import { BFormInput } from "bootstrap-vue";
import { BFormRadio } from "bootstrap-vue";
import Switches from "vue-switches";
Vue.component("b-avatar", BAvatar);
Vue.component("b-card", BCard);
Vue.component("b-form-checkbox", BFormCheckbox);
Vue.component("b-badge", BBadge);
Vue.component("b-button", BButton);
Vue.component("b-modal", BModal);
Vue.component("b-form-input", BFormInput);
Vue.component("b-progress", BProgress);
Vue.component("b-form-radio", BFormRadio);
Vue.component("v-switches", Switches);
