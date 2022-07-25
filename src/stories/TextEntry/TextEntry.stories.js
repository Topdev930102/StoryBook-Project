import MyText from "./TextEntry.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyText,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "active", "placeholder"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyText },
  template: '<my-text v-bind="$props" />',
});

export const TextEntry = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
TextEntry.args = {
  status: "default",
};
