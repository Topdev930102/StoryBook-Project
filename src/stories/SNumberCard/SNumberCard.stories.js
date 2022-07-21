import MyCard from "./SNumberCard.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Card/SmallNumberCard",
  component: MyCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: {
      control: { type: "number" },
    },
    label: {
      control: { type: "text" },
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
12650;
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: " طالب جديد",
  value: 12650,
};
