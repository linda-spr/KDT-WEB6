const alphabet = [
  { id: 1, alpha: 'a' },
  { id: 2, alpha: 'p' },
  { id: 3, alpha: 'p' },
  { id: 4, alpha: 'l' },
  { id: 5, alpha: 'e' },
];

alphabet.map((value) => {
  console.log(value);
});

console.log('=======');
const comment = [
  {
    id: 1,
    writer: '민수',
    title: '안뇽',
  },
  {
    id: 2,
    writer: '지민',
    title: '하이하이',
  },
  {
    id: 3,
    writer: '희수',
    title: '멋쟁이',
  },
];
const newData = {
  id: 4,
  writer: '션',
  title: '안녕',
};
console.log([...comment, newData]);
