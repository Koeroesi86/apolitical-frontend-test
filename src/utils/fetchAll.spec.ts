import fetchAll from './fetchAll';
import cachedFetch from './cachedFetch';
import {mocked} from 'ts-jest/utils';

const testUrl = 'https://example.com/1';
jest.mock('./cachedFetch', () => ({
  __esModule: true,
  default: jest.fn(async (url: string) => {
    if (url === 'https://example.com/2') {
      return {
        previous: testUrl,
        results: [
          '3', '4'
        ]
      };
    }

    return {
      next: 'https://example.com/2',
      results: [
        '1', '2'
      ]
    };
  }),
}));

describe('fetchAll', () => {
  const mockedCachedFetch = mocked(cachedFetch, true);
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch next pages', async () => {
    const result = await fetchAll(testUrl);

    expect(cachedFetch).toHaveBeenCalledTimes(2);
    expect(result).toMatchSnapshot('result');
    expect(mockedCachedFetch.mock.calls).toMatchSnapshot('cachedFetch calls');
  });
});
