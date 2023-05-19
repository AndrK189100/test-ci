import getHealths from '../health';

test.each([
  { pers: { name: 'a', health: 80 }, expected: 'healthy' },
  { pers: { name: 'b', health: 45 }, expected: 'wounded' },
  { pers: { name: 'c', health: 0 }, expected: 'critical' },
])(
  'must return $expected if pers $pers.name have percent health $pers.health',
  ({ pers, expected }) => {
    const result = getHealths(pers);
    expect(result).toBe(expected);
  },
);
