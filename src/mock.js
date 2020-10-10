export const mockData = [
  {
  id: 1,
  name: 'Марина',
  phone: '+7 941 123 00 01',
  parentId: null,
  children: []
  },
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
  },
  {
    id: 4,
    name: 'Борис',
    phone: '+7 941 123 00 04',
    parentId: null,
    children: []
  }
];
