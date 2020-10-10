export const mockData = [
  // {
  // id: 1,
  // name: 'Марина',
  // phone: '+7 941 123 00 01',
  // parentId: null,
  // children: []
  // },
  {
    id: 2,
    name: 'Петр',
    phone: '+7 941 123 00 02',
    parentId: null,
    children: []
  },
  {
    id: 3,
    name: 'Алексей',
    phone: '+7 941 123 00 03',
    parentId: null,
    children: [
      {
        id: 31,
        name: 'Иван',
        phone: '+7 941 123 00 31',
        parentId: 3,
        children: []
      },
  ],
      // {
      //   id: 32,
      //   name: 'Владимир',
      //   phone: '+7 941 123 00 32',
      //   parentId: 3,
      //   children: [
      //     {
      //       id: 321,
      //       name: 'Кирилл',
      //       phone: '+7 941 123 03 21',
      //       parentId: 32,
      //       children: [
      //         {
      //           id: 3211,
      //           name: 'Олег',
      //           phone: '+7 941 123 32 11',
      //           parentId: 322,
      //           children: []
      //         },
      //         {
      //           id: 3212,
      //           name: 'Ихтиандр',
      //           phone: '+7 941 123 32 12',
      //           parentId: null,
      //           children: []
      //         }
      //       ]
      //     }]
      // }]
  },
  // {
  //   id: 4,
  //   name: 'Мария',
  //   phone: '+7 941 123 00 04',
  //   parentId: null,
  //   children: []
  // }
];
