import MyProgress from "./ProgressBar.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/ProgressBar",
  component: MyProgress,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    status: {
      control: { type: "boolean" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyProgress },
  template: '<my-progress v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  value: 0,
  status: true,
};
