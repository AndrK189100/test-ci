import sortPers from '../sortpers';

const pers = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedPers = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('check sorting pers array by health', () => {
  const result = sortPers(pers);
  expect(result).toEqual(sortedPers);
});
