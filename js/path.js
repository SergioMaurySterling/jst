//Point 3

const
    path = (object, key) => Object
        .entries(object)
        .reduce((r, [k, v]) => {
            if (!v || typeof v !== 'object') return r;
            r.push(...path(v, key).map(([l, v]) => [k + (l && '/') + l, v]));
            return r;
        }, key in object ? [['', object[key]]] : []),
    someObject = {
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

module.exports(path)
// console.log(new Map(path(someObject, 'uuid')))