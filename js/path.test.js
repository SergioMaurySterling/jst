const path = require('./path');

someObject1 = {
  uuid: 1,
  innerOne: {
      someKey: 'someValue'
  },
  innerTwo: {
      uuid: 2,
      innerThree: {
          someOtherKey: 'someOtherValue',
          innerFour: {
              uuid: 3
          }
      }
  }
}

someObject2 = {
  innerOne: {
      someKey: 'someValue'
  },
  innerTwo: {
    someKey: 'someValue'
  },
  innerThree: {
      uuid: 1,
      innerFour: {
          someOtherKey: 'someOtherValue',
          innerFive: {
              uuid: 2
          }
      }
  }
}

someObject3 = {
  innerOne: {
      uuid:1,
      someKey: 'someValue'
  },
  innerTwo: {
    uuid:2,
    someKey: 'someValue'
  },
  innerThree: {
      uuid: 3,
      innerFour: {
          uuid: 4,
          someOtherKey: 'someOtherValue',
          innerFive: {
              uuid: 5
          }
      }
  },
  innerSix: {
    uuid: 6,
  }
}

test('path working correctly', function(){
  expect(JSON.stringify(path(someObject1, 'uuid'))).toEqual(`[["",1],["innerTwo",2],["innerTwo/innerThree/innerFour",3]]`)
  expect(JSON.stringify(path(someObject2, 'uuid'))).toEqual(`[["innerThree",1],["innerThree/innerFour/innerFive",2]]`)
  expect(JSON.stringify(path(someObject3, 'uuid'))).toEqual(`[["innerOne",1],["innerTwo",2],["innerThree",3],["innerThree/innerFour",4],["innerThree/innerFour/innerFive",5],["innerSix",6]]`)
})