<script>
  import { generateRandomId } from '../utils/utils';
  import Table from '@/components/Table';
  import Dialog from '@/components/Dialog';
  export default {
    name: 'Main',
    components: {
      Table,
      Dialog,
    },
    data() {
      return {
        tableData: [
          {
            id: 1,
            name: 'name1',
            phone: '123456789+1',
            parentId: null,
          },
          {
            id: 2,
            name: 'name2',
            phone: '123456789+2',
            parentId: null,
          },
          {
            id: 3,
            name: 'name3',
            phone: '123456789+3',
            parentId: null,
            children: [
              {
                id: 31,
                name: 'name31',
                phone: '123456789+31',
                parentId: 3,
              },
              {
                id: 32,
                name: 'name32',
                phone: '123456789+32',
                parentId: 3,
                children: [
                  {
                    id: 321,
                    name: 'name311',
                    phone: '123456789+311',
                    parentId: 32,
                    children: [
                      {
                        id: 3211,
                        name: 'name3111',
                        phone: '123456789+3111',
                        parentId: 322,
                      },
                      {
                        id: 3212,
                        name: 'name3112',
                        phone: '123456789+3112',
                        parentId: null,
                      }
                    ]
                  }]
              }]
          },
          {
            id: 4,
            name: 'name4',
            phone: '123456789+4',
            parentId: null,
          }],
        isDialogVisible: false,
      };
    },
    mounted() {
      if (localStorage.getItem('tableData')) {
        try {
          this.tableData = JSON.parse(localStorage.getItem('tableData'));
        } catch(error) {
          localStorage.removeItem('tableData');
        }
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

        this._saveData();
      },
      _saveData() {
        const parsed = JSON.stringify(this.tableData);
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
