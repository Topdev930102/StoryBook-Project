<template>
 <div>
  <b-modal v-model="modalShow" class="datemodal" hide-header hide-backdrop hide-footer>
  <div>
     <p class="text-center f-5">إضافة موسم</p>
  </div>
  <div>
    <div class="py-3">
         <b-form-input  v-model="value" class="input-label px-4" placeholder="Label" type="text"></b-form-input>
    </div>
    <div class="py-3">
      <b-form-input  v-model="start_date" class="input-date px-4" type="date"></b-form-input>
    </div>
    <div class="py-3">
         <b-form-input  v-model="end_date" class="input-date px-4" type="date"></b-form-input>
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
