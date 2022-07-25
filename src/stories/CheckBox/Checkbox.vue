<template>
<div>
  <label class="checkbox_container">
  <input type="checkbox" checked="checked" @change="onChange">
  <span class="checkmark"></span>
</label>
</div>

</template>
<script>
import './checkbox.scss';
export default {
  name: 'my-checkbox',
  data() {
    return {
      status: true
    }
  },
  methods: {
    onChange() {
      this.status = !this.status;
    }
  }
};
</script>
