import fetchData from '../http';
import getLevel from '../getlevel';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [{ status: 'ok', level: 100 }, 'Ваш текущий уровень: 100'],
  [{ status: 'err', level: 0 }, 'Информация об уровне временно недоступна'],
])(('should return result depending on %o'), (response, expected) => {
  fetchData.mockReturnValue(response);

  const result = getLevel(response.level);
  expect(result).toBe(expected);
});

test('request link', () => {
  fetchData.mockReturnValue({});

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
