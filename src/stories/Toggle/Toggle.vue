<template>
  <div>
    <input type="checkbox" class="storybook-toggle" id="switch" @change="onChange" />
    <label class="toggle-label" for="switch"></label>
  </div>
</template>
<script>
import './toggle.scss';
export default {
  name: 'my-toggle',
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
