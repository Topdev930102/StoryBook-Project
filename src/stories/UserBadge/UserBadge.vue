<template>
  <div>
    <div v-if="status" class="badge success-badge text-center s-2">
      نشط
    </div>
    <div v-else class="badge warning-badge text-center s-2">
      خامل
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
