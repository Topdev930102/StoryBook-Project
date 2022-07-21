import MyChart from "./Chart.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Chart",
  component: MyChart,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: {
      control: { type: "number" },
    },
    title: {
      control: { type: "text" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyChart },
  template: '<my-chart v-bind="$props" />',
});

export const Primary = Template.bind({});
12650;
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  value: 19,
  title: "الأعضاء المؤكدين",
};
