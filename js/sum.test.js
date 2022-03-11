const sum = require('./sum')

test('sum clousure', function(){
  expect(sum()).toBe(0)
  expect(sum(2)(2)()).toBe(4);
  expect(sum(1)()).toBe(1);
  expect(sum(1)(2)()).toBe(3);
  expect(sum(1)(2)(4)()).toBe(7);
})