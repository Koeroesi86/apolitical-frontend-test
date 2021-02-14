import cacheProvider from './cacheProvider';

describe('cacheProvider', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('should return undefined for no record', async () => {
    const result = await cacheProvider.get('test');

    expect(result).toEqual(undefined)
  });

  it('should store data', async () => {
    const data = { foo: 'bar' };
    const key = 'test';

    await cacheProvider.set(key, data);
    const result = await cacheProvider.get(key);

    expect(result).toEqual(data);
  });
});
