<template>
  <div>
    <div v-if="status" class="badge success-badge v-center s-1">
      غير منشور
    </div>
    <div v-else class="badge warning-badge v-center s-1">
      منشور
    </div>
  </div>
</template>

<script>
import '../badge.scss';
export default {
  name: 'content-badge',
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },

};
</script>
