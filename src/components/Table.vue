<script>
  export default {
    name: 'Table',
    props: {
      tableData: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {}
    },
    methods: {},
  };
</script>

<template>
  <el-table class="table__wrapper"
            :data="tableData"
            row-key="id"
            border
            default-expand-all>

    <el-table-column prop="name"
                     label="Имя"
                     width="auto"
                     sortable/>

    <el-table-column prop="phone"
                     label="Телефон"
                     width="auto"
                     sortable/>
  </el-table>
</template>


<style scoped lang="scss">
  .table {
    &__wrapper {
      width: 100%;
     }
  }
</style>
