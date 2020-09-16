import helloworld from './index';

test('index.js', () => {
  expect(helloworld()).toBe(undefined);
})