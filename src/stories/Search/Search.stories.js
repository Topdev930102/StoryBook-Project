import MySearch from "./Search.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MySearch,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MySearch },
  template: '<my-search v-bind="$props" />',
});

export const SearchField = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SearchField.args = {};
