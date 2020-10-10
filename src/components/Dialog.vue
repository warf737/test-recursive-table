<script>
  export default {
    name: 'Dialog',
    props: {
      isDialogVisible: {
        type: Boolean,
        required: true,
      },
      managersList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        dialogData: {
          name: '',
          phone: '',
          parentId: null,
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      _resetForm() {
        this.dialogData = {
          name: '',
            phone: '',
            parentId: null,
        };
      },
      handleClose() {
        this._resetForm();
        this.$emit('close');
      },
      handleSubmit() {
        this.$emit('submit');
        this.handleClose();
      }
    },
  }
</script>

<template>

  <el-dialog
    title="Добавление пользователя"
    :visible.sync="isDialogVisible"
    >

    <el-form :model="dialogData">

      <el-form-item label="Имя"
                    :label-width="formLabelWidth">

        <el-input v-model="dialogData.name"
                  autocomplete="off"/>
      </el-form-item>

      <el-form-item label="Телефон"
                    :label-width="formLabelWidth">

        <el-input v-model="dialogData.name"
                  autocomplete="off"/>

      </el-form-item>

      <el-form-item label="Руководитель"
                    :label-width="formLabelWidth">

        <el-select class="custom-select"
                   v-model="dialogData.phone"
                   placeholder="Выберите руководителя">

            <el-option v-for="(manager, index) in managersList"
                       :key="index"
                       :label="manager.name"
                       :value="manager.id"/>

        </el-select>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">Отменить</el-button>
    <el-button type="primary" @click="handleSubmit">Сохранить</el-button>
  </span>
  </el-dialog>


</template>


<style>
  /*.custom-select {*/
  /*   display: block;*/
  /*}*/
  /*.el-form-item__label {*/
  /*  text-align: left;*/
  /*}*/
</style>
