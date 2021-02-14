import moxios from 'moxios';
import cachedFetch from './cachedFetch';

describe('cachedFetch', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should call axios only once', async () => {
    const url = 'https://example.com';
    moxios.stubRequest(url, {
      status: 200,
      response: {},
    });

    await cachedFetch(url);
    await cachedFetch(url);

    expect(moxios.requests.count()).toEqual(1);
    expect(moxios.requests.mostRecent()).toMatchSnapshot();
  });
});
