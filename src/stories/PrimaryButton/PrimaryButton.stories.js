import MyButton from "./PrimaryButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
    status: {
      control: { type: "select" },
      options: ["enabled", "hover", "actived", "disable"],
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "warning", "secondary warning"],
    },
    icon: {
      control: { type: "select" },
      options: ["none", "power", "question", "back", "book", "pen"],
    },
    label: {
      control: { type: "text" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  size: "small",
  type: "primary",
  status: "enabled",
  label: "اضغط هنا",
};
