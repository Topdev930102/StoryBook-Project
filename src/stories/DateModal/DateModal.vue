<template>
 <div>
  <b-modal v-model="modalShow" class="siglemodal" hide-header hide-backdrop hide-footer>
  <div>
     <p class="text-center">إضافة موسم</p>
  </div>
  <div>
    <div class="py-3">
         <b-form-input  v-model="value" placeholder="Label" type="text"></b-form-input>
    </div>
    <div class="py-3">
      <b-form-input  v-model="start_date"  type="date"></b-form-input>
    </div>
    <div class="py-3">
         <b-form-input  v-model="end_date"  type="date"></b-form-input>
    </div>
   
  </div>
  <div class="d-flex justify-content-between py-2">
    <PrimaryButton type="primary" :label="'OK'" :size="'small'"  :status="'enabled'" @click="onOK"/>
    <PrimaryButton type="secondary" :label="'Cancel'" :size="'small'" :status="'enabled'" @click="onCancel"/>
  </div>
  </b-modal>
     
 </div>
</template>

<script>
import './datemodal.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';
export default {
    name: "my-modal",
    props: {},
    data() {
        return {
            modalShow: true,
            value:'',
            start_date:'',
            end_date:''
        };
    },
      methods: {
      onOK(){
        this.modalShow=false;
      },
      onCancel(){
        this.modalShow=false;
      }


    },
     components: { PrimaryButton}

};
</script>
