<template>

  <div class="textfield">
    <div class="textfield-feedback-card">
      <label :class="`textfield-feedback-label-${status}`">abc</label>
      <input type="text" dir='rtl' placeholder="label" :class="`textfield textfield-feedback-${status}`" />
      <div :class="`textfield-feedback-${status}-message text-end f-1`">{{ message }}</div>
    </div>
  </div>
</template>
<script>
import './textfeedback.scss';
export default {
  name: 'my-feedback',
  props: {
    status: {
      type: String,
      default: 'success',
      validator: function (value) {
        return ["success", "warning", "error", "information"].indexOf(value) !== -1;
      },
    },
    message: {
      type: String,
      required: true

    }
  },
  data() {
    return ({
      value: 'Text'
    })

  }
}
</script>
