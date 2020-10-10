<script>
  import { generateRandomId } from '../utils/utils';
  import Table from '@/components/Table';
  import Dialog from '@/components/Dialog';
  import { mockData }  from '../mock';

  export default {
    name: 'Main',
    components: {
      Table,
      Dialog,
    },
    data() {
      return {
        tableData: [],
        isDialogVisible: false,
      };
    },
    created() {
      if (localStorage.getItem('tableData')) {
        this._getData();
      } else {
        this._saveData(mockData);
        this._getData();
      }
    },
    computed: {
      // TODO добавить руководителей из вложенных записей
      userIdList() {
        return this.tableData.map(position => ({
            name: position.name,
            id: position.id,
          })
        )
      },
    },
    methods: {
      handleChangeVisible() {
        this.isDialogVisible = !this.isDialogVisible;
      },
      handleSave(data) {

        const isChild = Boolean(data.parentId);
        const newId = this._getRandomId();
        console.log('1', data);
        const newUser = {
          id: newId,
          name: data.name,
          phone: data.phone,
          parentId: data.parentId ? data.parentId : null
        };

        if(!isChild) {
          this.tableData.push(newUser);
        } else {
          console.log('функционал пока не доступен :(');
        }

        this._saveData(this.tableData);
      },
      _getData() {
        this.tableData = JSON.parse(localStorage.getItem('tableData'));
      },
      _clearData() {
        localStorage.removeItem('tableData');
      },
      _saveData(data) {
        const parsed = JSON.stringify(data);
        localStorage.setItem('tableData', parsed);
      },
      _getRandomId() {
        const newId = generateRandomId();
        const isExistId = this.userIdList.find(userId => userId === newId);

        if (isExistId) {
          this.getRandomId();
        } else {
          return newId;
        }
      },
    }
  }
</script>

<template>
  <div class="main">
    <h1>Test app</h1>

    <div class="main__wrapper">

      <section class="main__top">

        <el-button class="main__button"
                   type="success"
                   round
                   @click="handleChangeVisible"
        >Добавить
        </el-button>

      </section>

      <Table :tableData="tableData"/>

      <Dialog :isDialogVisible="isDialogVisible"
              :userIdList="userIdList"
              @close="handleChangeVisible"
              @submit="handleSave"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .main {
    width: 992px;
    margin-left: auto;
    margin-right: auto;

    &__wrapper {
      display: flex;
      flex-direction: column;
      width: 480px;
      height: auto;
      margin-right: auto;
      margin-left: auto;
    }

    &__top {
      margin-left: auto;
      padding-bottom: 20px;
    }
  }
</style>
