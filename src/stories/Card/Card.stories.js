import MyCard from "./Card.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Card/StandardCard",
  component: MyCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: "boolean" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  status: true,
};
