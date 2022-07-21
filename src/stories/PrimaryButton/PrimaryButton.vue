<template>
<div>
  <div v-if="type==='secondary warning'">
      <b-button :class="`secondary-warning-${status} ${size} secondary-warning-f-color v-center`" @click="onClick">
        <div>{{label}}</div>
        <div v-if="icon!='none'" class="p1-2">
           <img :src="`/static/media/src/assets/${icon}.svg`" width="20" height="20"/>
        </div>
      </b-button>
  
  </div>
  <div v-else>
      <b-button :class="`${type}-${status} ${size} ${type}-f-color v-center`" @click="onClick">
         <div>{{label}}</div>
          <div v-if="icon!='none'" class="pl-2">
            <img :src="`/static/media/src/assets/${icon}.svg`" width="20" height="20"/>
          </div>
      </b-button>

  </div>
</div>
</template>

<script>
import './primarybutton.scss';
export default {
  name: 'my-avatar',
  props: {
    label:{
      type:String,
      required:true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    status: {
      type: String,
      default: 'enabled',
      validator: function (value) {
        return ['enabled','hover', 'actived', 'disable'].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary','secondary', 'warning', 'secondary warning'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['none','upload', 'right'].indexOf(value) !== -1;
      },
    },
    
  },
  methods:{
    onClick(e){
      this.$emit('click',e);
    }

  }

};
</script>
