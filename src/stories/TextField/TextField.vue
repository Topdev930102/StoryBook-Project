<template>
  <div class="text-field">
    <div class="textfield-card">
      <label :class="`textfield-label-${status}`">abc</label>
      <input type="text" dir='rtl' placeholder="label" :class="`textfield textfield-${status}`" />
    </div>
  </div>
</template>
<script>
import './textfield.scss';
export default {
  name: 'my-textfield',
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
