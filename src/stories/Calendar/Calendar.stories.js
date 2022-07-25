import MyCalendar from "./Calendar.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MyCalendar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCalendar },
  template: '<my-calendar v-bind="$props" />',
});

export const Calendar = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Calendar.args = {
  label: "بداية الموسم",
};
