<template>

 <b-form-radio v-model="status" class="radio" 
    @change.native="onClick"
 ></b-form-radio>

</template>
<script>
import './radio.scss';

export default {
  name: 'my-radio',
  data() {
      return {
        status: true
      }
    },
    methods:{
      onClick(){
        this.status=!this.status;
      }

    }
 };
</script>
