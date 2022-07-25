import MyColor from "./Color.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyColor,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyColor },
  template: '<my-color v-bind="$props" />',
});

export const Color = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Color.args = {};
