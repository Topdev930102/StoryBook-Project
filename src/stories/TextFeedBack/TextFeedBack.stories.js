import MyFeed from "./TextFeedBack.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyFeed,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["success", "warning", "error", "information"],
    },
    message: {
      control: { type: "text" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyFeed },
  template: '<my-feed v-bind="$props" />',
});

export const TextFeedBack = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
TextFeedBack.args = {
  status: "success",
  message: "Send Message",
};
