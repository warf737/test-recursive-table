<script>

  export default {
    name: 'Dialog',
    props: {
      isDialogVisible: {
        type: Boolean,
        required: true,
      },
      userIdList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        dialogData: {
          id: null,
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
        this.$emit('submit', this.dialogData);
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

        <el-input v-model="dialogData.phone"
                  autocomplete="off"/>

      </el-form-item>

      <el-form-item label="Руководитель"
                    :label-width="formLabelWidth">

        <el-select class="custom-select"
                   v-model="dialogData.parentId"
                   placeholder="Выберите руководителя"
                   clearable>

            <el-option v-for="(user, index) in userIdList"
                       :key="index"
                       :label="user.name"
                       :value="user.id"/>

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
  .el-select {
     display: block !important;
  }
  .el-form-item__label {
    text-align: left !important;
  }
</style>
