<template>
<div @click="onChange()">
 <v-switches v-model="enabled" color="info" theme="bootstrap" ></v-switches>
 </div>
</template>
<script>
import './toggle.scss';

export default {
  name: 'my-toggle',
  data() {
      return {
        enabled: true
      }
    },
    methods:{
      onChange(){
        this.enabled=!this.enabled;
        this.$emit('changed');
      }

    }

 };
</script>
