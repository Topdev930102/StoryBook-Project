<template>
  <div v-switch="size">
    <div v-case="'small'">
      <b-avatar size="2rem">
        <div v-if="status"><img src="../../assets/client.jpg" class="avatar--small" /></div>
        <div v-else> <img src="../../assets/none.png" class="avatar--small" /></div>
      </b-avatar>
    </div>
    <div v-case="'medium'">
      <b-avatar size="2.5rem">
        <div v-if="status"><img src="../../assets/client.jpg" class="avatar--medium" /></div>
        <div v-else> <img src="../../assets/none.png" class="avatar--medium" /></div>
      </b-avatar>
    </div>
    <div v-case="'large'">
      <b-avatar size="4rem">
        <div v-if="status"> <img src="../../assets/client.jpg" class="avatar--large" /></div>
        <div v-else> <img src="../../assets/none.png" class="avatar--large" /></div>
      </b-avatar>
    </div>
  </div>
</template>
<script>
import './button.scss';
export default {
  name: 'my-avatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    status: {
      type: Boolean,
      default: true
    }
  },
};
</script>
