import MyArea from "./TextArea.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyArea,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "active", "filled", "readonly", "placeholder"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyArea },
  template: '<my-area v-bind="$props" />',
});

export const TextArea = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
TextArea.args = {
  status: "default",
};
