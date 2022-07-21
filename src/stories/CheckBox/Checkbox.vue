<template>
 <b-form-checkbox v-model="status" class="checkbox"  
    @click.native="onClick"
 ></b-form-checkbox>

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
    methods:{
      onClick(){
        this.status=!this.status;
      }

    }


 };
</script>
