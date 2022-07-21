<template>
<div class="tab-nav">
  <div v-for="item in items" class="tab-item px-4 py-1" @click="onClick(item)" :class="[ActTab===item?'active':'']">
    {{item}}
  </div>


</div>
</template>

<script>
import './tab.scss';
export default {
  name: 'TabButton',
  props: {
  },
  data(){
        return {
            ActTab: "Tab1",
            items:['Tab1','Tab2','Tab3']
        };
  },

  methods:{
    onClick(item){
      this.ActTab=item;
    }
  }

};
</script>
