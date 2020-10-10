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

        const getUserData = (e) => {
          userList.push({
            id: e.id,
            name: e.name,
          });
          e.children && e.children.forEach(getUserData);
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
          let updatedUser = null;
          for (let i = 0; updatedUser === null && i < this.tableData.length; i++) {
            updatedUser = this._searchUser(this.tableData[i], newUser.parentId);
          }

          updatedUser.children.push(newUser);
        }

        this._saveData(this.tableData);
      },
      _searchUser(user, matchingUserId) {
        const isMatchingResult = user.id === matchingUserId;
        const isUserHasChildren = Boolean(user.children);

        if (isMatchingResult) {
          return user;
        } else if (isUserHasChildren) {
          let result = null;
          for (let i = 0; result === null && i < user.children.length; i++) {
            result = this._searchUser(user.children[i], matchingUserId);
          }
          return result;
        }
        return null;
        },
      _getData() {
        this.tableData = JSON.parse(localStorage.getItem('tableData'));
      },
      // _clearData() {
      //   localStorage.removeItem('tableData');
      // },
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
