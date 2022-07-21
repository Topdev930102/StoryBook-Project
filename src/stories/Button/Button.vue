<template>
<div>
  <div v-if="size==='small'">
   <b-avatar size="2rem">
      <div v-if="status"><img src="../../assets/avatar.png" width="32px" height="32px"/></div>
   </b-avatar>
  </div>
  <div v-if="size==='medium'">
    <b-avatar size="2.5rem">
      <div v-if="status"><img src="../../assets/avatar.png" width="40px" height="40px"/></div>
    </b-avatar>
  </div>
  <div v-if="size==='large'">
    <b-avatar size="4rem">
       <div v-if="status"> <img src="../../assets/avatar.png" width="64px" height="64px"/></div>
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
    status:{
      type:Boolean,
      default:true
    }
  },

};
</script>
