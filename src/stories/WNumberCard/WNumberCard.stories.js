import MyCard from "./WNumberCard.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Card/LargeNumberCard",
  component: MyCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: {
      control: { type: "number" },
    },
    label: {
      control: { type: "text" },
    },
    title: {
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
  label: "خلال الشهر الحالي",
  value: 117500,
  title: "مجموع الايراد لجميع الدورات",
};
