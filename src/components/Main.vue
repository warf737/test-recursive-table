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
      userIdList() {
        let userList = [];

        const getUserData = (user) => {
          userList.push({
            id: user.id,
            name: user.name,
          });
          user.children && user.children.forEach(getUserData);
        };

        this.tableData.forEach(getUserData);

        return userList;
      },
    },
    methods: {
      handleChangeVisible() {
        this.isDialogVisible = !this.isDialogVisible;
      },
      handleSave(data) {

        const isChild = Boolean(data.parentId);
        const newId = this._getRandomId();
        const newUser = {
          id: newId,
          name: data.name,
          phone: data.phone,
          parentId: data.parentId ? data.parentId : null,
          children: data.children,
        };


        if(!isChild) {
          this.tableData.push(newUser);
        } else {
          const matchingId = newUser.parentId;
          let result = null;

          const search = users => {
            users.find(user => {
              if (user.id === matchingId) {
                result = user;
              } else if (user.children.length) {
                result = search(user.children);
              }
            });
            return result;
          };

          const updatedUser = search(this.tableData);
          updatedUser.children.push(newUser);
        }

        this._saveData(this.tableData);
      },
      _getData() {
        this.tableData = JSON.parse(localStorage.getItem('tableData'));
      },
      _saveData(data) {
        const parsed = JSON.stringify(data);
        localStorage.setItem('tableData', parsed);
      },
      _getRandomId() {
        const newId = generateRandomId();
        const isExistId = this.userIdList.find(userId => userId === newId);

        if (isExistId) {
          return this._getRandomId();
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

        <el-button class="main__button-create"
                   type="success"
                   round
                   @click="handleChangeVisible"
        >Добавить запись
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
