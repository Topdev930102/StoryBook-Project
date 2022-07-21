<template>
<div>
  <div v-if="status" class="success-badge v-center s-2">
    منشور
  </div>
  <div v-else class="warning-badge v-center s-2">
    نشط 
  </div>
</div>

</template>

<script>
import '../badge.scss';
export default {
  name: 'my-badge',
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },

};
</script>
