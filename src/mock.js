export const mockData = [
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
  }
];
