<template>
  <div>
    <table class="main-table">
      <thead>
        <th class="table-head-start">
          age
        </th>
        <th class="table-head-middle">
          <div class="first-name">
            <div>first_name</div>
            <div v-if="sortable" class="sort-icon">
              <b-icon icon="caret-up-fill" />
              <b-icon icon="caret-down-fill" />
            </div>
          </div>
        </th>
        <th class="table-head-end">
          <div class="last-name">
            <div>last_name</div>
            <div v-if="sortable" class="sort-icon">
              <b-icon icon="caret-up-fill" />
              <b-icon icon="caret-down-fill" />
            </div>
          </div>
        </th>
      </thead>
      <tr class="table-item" v-for="item in items">
        <td>{{ item.age }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import './table.scss';
export default {
  name: 'my-table',
  props: {
    sortable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' }
      ]
    }
  },
};
</script>
