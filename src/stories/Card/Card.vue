<template>
<div >
  <b-card class="standard-card">
    <div class="d-flex justify-content-between">
      <div class='d-flex py-3' :class="[status?'hidden':'visible']">
        <TabButton :label='"موسمي"' :status="false"></TabButton>
        <TabButton :label='"موسمي"' :status="false"></TabButton>
        <TabButton :label='"موسمي"' :status="true"></TabButton>
      </div>
      <div>
        <BadgeButton :label='"احصائيات الدورات الجديدة"'/>
      </div>
    </div>
    <div class="py-3">
      <ProgressBar :status='status' :value='50'/>
    </div>
    <div class="py-3">
       <ProgressBar :status='status' :value='50'/>
    </div>

  </b-card>
</div>
</template>

<script>
import './card.scss';
import TabButton from '../TabButton/TabButton.vue';
import BadgeButton from '../SmallCornerButton/SmallCornerButton.vue';
import ProgressBar from '../ProgressBar/ProgressBar.vue';


export default {
  name: 'CardElement',
  props:{
    status:{
      type:Boolean,
      required:true
    }
  },
     components: { TabButton, BadgeButton,ProgressBar }
};
</script>
