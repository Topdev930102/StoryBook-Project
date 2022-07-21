<template>
<div>
  <div v-if="status">
   <b-button class="tab-enable"  @click="onClick">{{label}}</b-button>
  </div>
  <div v-else>
    <b-button class="tab-disable" @click="onClick">{{label}}</b-button>
  </div>
</div>
</template>

<script>
import './tabbutton.scss';
export default {
  name: 'TabButton',
  props: {
    status:{
      type:Boolean,
      required:true
    },
    label:{
      type:String,
      required:true
    },
  },
  methods:{
    onClick(e){
      this.$emit('click',e);
    }
  }

};
</script>
