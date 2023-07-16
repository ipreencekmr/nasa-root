import { fromJS } from 'immutable';
import { get } from 'js-cookie';
import { requireAuth } from '../../src/hooks/requireAuth';

jest.mock('js-cookie', () => ({
  ...jest.requireActual('js-cookie'),
  get: jest.fn(),
}));

jest.mock('@americanexpress/one-app-ducks', () => ({
  ...jest.requireActual('@americanexpress/one-app-ducks'),
  externalRedirect: jest.fn(),
}));

jest.mock('../../src/selectors/getAppDomain', () => ({
  getAppDomain: jest.fn(() => 'mockDomain'),
}));

describe('requireAuth', () => {
  const mockState = fromJS({});
  let store;
  let callback;
  let replace;
  let nextState;
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    store = {
      getState: jest.fn(() => mockState),
      dispatch,
    };
    nextState = { params: { locale: 'mockLocale' } };
    callback = jest.fn();
    replace = jest.fn();
    global.BROWSER = true;
  });

  it('requireAuth should return a function', () => {
    const requireAuthFn = requireAuth(store);
    expect(typeof requireAuthFn).toBe('function');
  });

  it('requireAuth should return if called on server', async () => {
    global.BROWSER = false;
    const requireAuthFn = requireAuth(store);
    await requireAuthFn(nextState, replace, callback);
    expect(get).not.toHaveBeenCalled();
    expect(callback).toHaveBeenCalled();
  });

  it('requireAuth should redirect if not authenticated', async () => {
    const requireAuthFn = requireAuth(store);
    await requireAuthFn(nextState, replace, callback);
    expect(get).toHaveBeenCalled();
    expect(callback).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  });

  it('requireAuth should not redirect if authenticated', async () => {
    get.mockReturnValueOnce('mockToken');
    const requireAuthFn = requireAuth(store);
    await requireAuthFn(nextState, replace, callback);
    expect(get).toHaveBeenCalled();
    expect(callback).toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
  });
});
