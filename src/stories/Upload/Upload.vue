<template>
  <div>
    <div v-if="type === 'profile'" class="d-flex justify-content-between align-items-center">
      <div>
        <div class="d-flex justify-content-end align-items-center">
          <div v-if="active === true" class="px-1">
            <PrimaryButton :size="'xsmall'" :type="'secondary'" :label="'حذف الصورة'" :status="'enabled'"
              @click="DeleteProfile" />
          </div>
          <div class="px-1">
            <PrimaryButton :size="'xsmall'" :type="'primary'" :label="'اضغط هنا'" :status="'enabled'"
              @click="ChangeProfile" />
          </div>
        </div>
        <div>
          يفضل أن يكون حجم الصورة الشخصية 256x256
        </div>
      </div>
      <div>
        <Button :size="'large'" :status="active" />
      </div>
    </div>
    <div v-else>
      <div class="upload-card d-flex justify-content-around" v-if="progress === 'start'">
        <input type="file" ref="input" class="ref-button" value='file' @change="previewFiles" multiple />
        <div class="upload-item">
          <div class="browser fc-primary" @click="OpenDialog">
            تصفح الملفات
          </div>
          <div>
            قم بسحب صورة من جهازك أو
          </div>
          <div>
            <b-icon icon="upload">
            </b-icon>
          </div>
        </div>
      </div>
      <div class="upload-card px-3 py-2" v-if="progress === 'pending'">
        <div class="d-flex justify-content-between">
          <div>
            <b-icon icon="x" />
          </div>
          <div>
            جاري رفع الصورة
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div>
            {{ percentage }}% - {{ file.name }}
          </div>
        </div>
        <div>
          <ProgressBar :value="percentage" :status='false' />
        </div>
      </div>
      <div v-if="type === 'image' && progress === 'end'"
        class="upload-card px-3 py-2 d-flex justify-content-between align-items-center">
        <div @click="cancel">
          <b-icon icon="trash" />
        </div>
        <div class="d-flex align-items-center">
          <div class="text-end">
            <div>
              {{ file.name }}
            </div>
            <div>
              {{ parseFloat(file.size / 1000).toFixed(1) }}kb
            </div>
          </div>
          <div>
            <img src="../../assets/arrow.png" width="82px" height="82px">
          </div>
        </div>
      </div>
      <div v-if="type === 'video' && progress === 'end'"
        class="upload-card px-3 py-2 d-flex justify-content-between align-items-center">
        <div @click="cancel">
          <b-icon icon="trash" />
        </div>
        <div class="d-flex align-items-center">
          <div class="text-end">
            <div>
              {{ file.name }}
            </div>
            <div>
              {{ parseFloat(file.size / 1000).toFixed(1) }}kb
            </div>
          </div>
          <div>
            <img src="../../assets/arrow_video.png" width="82px" height="82px">
          </div>
        </div>
      </div>
      <div v-if="type === 'lesson' && progress === 'end'"
        class="upload-lesson-card d-flex justify-content-between flex-column px-1 py-2">
        <div class="d-flex justify-content-around">
          <img src="../../assets/arrow_lesson.png" width="477px" height="208px" />
        </div>
        <div class="d-flex justify-content-around align-items-center px-5 py-2">
          <div>
            <PrimaryButton :label="'تغيير الفيديو'" :size="'xsmall'" :type="'secondary'" :status="'enabled'" />
          </div>
          <div class="lesson-cancel fc-primary" @click="cancel">
            حذف
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './upload.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue'
import Button from '../Button/Button.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'
export default {
  name: 'my-upload',
  data() {
    return {
      active: false,
      file: '',
      percentage: 0,
      timer: null,
      progress: 'start'
    }
  },

  props: {
    type: {
      type: String,
      default: 'image',
      validator: function (value) {
        return ['image', 'video', 'lesson', 'profile'].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    ChangeProfile() {
      this.active = !this.active;
    },
    DeleteProfile() {
      this.active = !this.active;
    },
    OpenDialog(e) {
      this.$refs.input.click();
      // console.log('***********',this.$ref);
    },
    previewFiles(e) {
      this.file = e.target.files[0];
      this.progress = 'pending';
      this.percentage=100;
      setTimeout(()=>{
          this.progress = 'end';
      },500)
    },
    cancel(e) {
      this.file = '';
      this.$emit('click', e);
      this.progress = 'start';
      this.percentage = 0;
    }
  },
  components: { PrimaryButton, Button, ProgressBar }
};
</script>
