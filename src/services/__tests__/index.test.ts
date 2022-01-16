/* eslint-disable jest/valid-expect */
import * as subject from '../index';

describe('services/index', () => {
  it('should export functions correctly', async () => {
    expect(subject.login).toBeInstanceOf(Function);
    expect(subject.login).toHaveLength(1);
    expect(subject.login({})).rejects.toThrow();
  });
});
