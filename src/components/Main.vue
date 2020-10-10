<script>
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
            phone: '123456789+1'
          },
          {
            id: 2,
            name: 'name2',
            phone: '123456789+2'
          },
          {
            id: 3,
            name: 'name3',
            phone: '123456789+3',
            children: [
              {
                id: 31,
                name: 'name31',
                phone: '123456789+31'
              },
              {
                id: 32,
                name: 'name32',
                phone: '123456789+32',
                children: [
                  {
                    id: 311,
                    name: 'name311',
                    phone: '123456789+311',
                    children: [
                      {
                        id: 3111,
                        name: 'name3111',
                        phone: '123456789+3111',
                      },
                      {
                        id: 3112,
                        name: 'name3112',
                        phone: '123456789+3112',
                      }
                    ]
                  }]
              }]
          },
          {
            id: 4,
            name: 'name4',
            phone: '123456789+4'
          }],
        isDialogVisible: false,
      };
    },
    computed: {
      managersList() {
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
      handleSave() {
        console.log('saved');
      }
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
              :managersList="managersList"
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
