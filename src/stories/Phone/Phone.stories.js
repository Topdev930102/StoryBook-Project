import MyPhone from "./Phone.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyPhone,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "active", "filled"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPhone },
  template: '<my-phone v-bind="$props" />',
});

export const PhoneNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
PhoneNumber.args = {
  status: "default",
};
