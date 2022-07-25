<template>
  <div class="textfield">
    <div class="textarea-card" v-switch="status">
      <label :class="`textarea-label textarea-label-${status}`">Label</label>
      <textarea v-case="'default'" dir='rtl' placeholder="label" class="textarea textarea-default" />
      <textarea v-case="'active'" type="text" dir='rtl' placeholder="" class="textarea textarea-active" />
      <textarea v-case="'filled'" type="text" v-model="value" dir='rtl' placeholder="label"
        class="textarea textarea-filled" />
      <textarea v-case="'readonly'" type="text" v-model='value' dir='rtl' placeholder="label"
        class="textarea textarea-readonly" disabled />
      <textarea v-case="'placeholder'" type="text" dir='rtl' placeholder="Placeholder"
        class="textarea textarea-placeholder" />
    </div>
  </div>
</template>
<script>
import './textarea.scss';
export default {
  name: 'my-textarea',
  props: {
    status: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ["default", "active", "filled", "readonly", "placeholder"].indexOf(value) !== -1;
      },
    }
  },
  data() {
    return ({
      value: 'Text'
    })

  }
}
</script>
