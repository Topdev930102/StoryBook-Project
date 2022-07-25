<template>
  <div class="whole-sidebar">
    <div v-if='status' class="sidebar">
      <div class="sidebar-header v-around">
        <div class="sidebar-title v-around">
          لوحة التحكم
        </div>
        <div class="sidebar-icon" @click="onClick">
          <img src="../../assets/sidebar-icon.png" />
        </div>
      </div>
      <div v-for="(item, index) in items" class="sidebar-tab">
        <div v-for="(key, value) in item" class="sidebar-item f-3" :id="`sidebar-item-${index}`">
          <div>
            <b-tooltip :target="`sidebar-item-${index}`" placement="left" offset="100" variant="info">
              <div class="tooltip-item">
                خيار ١
              </div>
              <div class="tooltip-item">
                خيار ٢
              </div>
              <div class="tooltip-item">
                خيار ٣
              </div>
              <div class="tooltip-item">
                خيار ٤
              </div>
              <div class="tooltip-item">
                خيار ٥١
              </div>
            </b-tooltip>
          </div>
          <div>
            < </div>
              <div class="d-flex align-items-center">
                <div class="px-1">{{ value }}</div>
                <b-icon v-if='value' :icon="`${key}`"></b-icon>
              </div>
          </div>
        </div>
        <div class="sidebar-footer">
          <PrimaryButton class='py-2' :size="'small'" :type="'secondary'" :status="'enabled'" :label="'عودة للمنصة'"
            :icon="'back'" />
          <PrimaryButton class='py-2' :size="'small'" :type="'secondary warning'" :status="'enabled'" :icon="'power'"
            :label="'تسجيل خروج'" />

          <div class="d-flex justify-content-around align-items-center pr-2">
            <div class="sidebar-footer-item d-flex">
              <div>
                مركز المساعدة
              </div>
              <div>
                <b-icon icon="question"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="sidebar-collapse">
        <div class="sidebar-collapse-header d-flex justify-content-around">
          <div class="sidebar-collapse-title v-around">
            لوحة التحكم
          </div>
          <div class="sidebar-collapse-icon" @click="onClick">
            <img src="../../assets/sidebar-reverse-icon.png" />
          </div>
        </div>
        <div v-for="(item, index) in items" class="sidebar-collapse-tab">
          <div v-for="(key, value) in item" class="sidebar-collapse-item f-3" :id="`sidebar-item-${index}`">
            <div>
              <b-tooltip :target="`sidebar-item-${index}`" placement="left" offset="100" variant="info">
                <div class="tooltip-item">
                  خيار ١
                </div>
                <div class="tooltip-item">
                  خيار ٢
                </div>
                <div class="tooltip-item">
                  خيار ٣
                </div>
                <div class="tooltip-item">
                  خيار ٤
                </div>
                <div class="tooltip-item">
                  خيار ٥١
                </div>
              </b-tooltip>
            </div>
            <div class="d-flex align-items-center">
              <b-icon v-if='value' :icon="`${key}`"></b-icon>
            </div>
          </div>
        </div>
        <div class="sidebar-collapse-footer">
          <div class="v-center sidebar-collapse-footer-icon">
            <b-icon icon="back"></b-icon>
          </div>
          <div class="v-center sidebar-collapse-footer-icon fc-danger">
            <b-icon icon="power"></b-icon>
          </div>
          <div class="v-center sidebar-collapse-footer-icon">
            <b-icon icon="question"></b-icon>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import './sidebar.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';

export default {
  name: 'my-side',
  data() {
    const items = [
      { "لوحة التحكم": "alarm" },
      { "الاحصائيات": "border-all" },
      { "الاحصائيات": "person" },
      { "الاحصائيات": "minecart" },
      { "الاحصائيات": "list" },
      { "الاحصائيات": "journal" },
      { "الاحصائيات": "hammer" },

    ];
    return {
      items: items,
      status: true
    }
  },
  methods: {
    onClick() {
      this.status = !this.status;
    }

  },
  components: { PrimaryButton }
};
</script>
