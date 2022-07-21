import MyTab from "./TabButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/TabButton",
  component: MyTab,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: "boolean",
    },
    lable: {
      control: "text",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyTab },
  template: '<my-tab v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  status: true,
  label: "شهري",
};
