<template>
  <div>
    <input type="radio" class="storybook-radio" value="value" :checked="`${status}`" id="radio" name="radio-group"
      @click="onClick">
    <label for="radio" class="radio-label"></label>
  </div>
</template>
<script>
import './radio.scss';

export default {
  name: 'my-radio',
  data() {
    return {
      status: "",
      value: false
    }
  },
  methods: {
    onClick(e) {
      if (!this.value) {
        this.status = "checked";
        this.value = true;
      }
      else {
        this.status = "";
        this.value = false;
      }

    }

  }
};
</script>
