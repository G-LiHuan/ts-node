import TestUnit from '../index';
test('测试文件名生成', () => {
  const unit = new TestUnit();
  const ret = unit.getTestFileName('/abc/class.ts');
  console.log('getTestFileName', ret);
  expect(ret)
    .toBe('/abc/__test__/class.spec.ts');
});
