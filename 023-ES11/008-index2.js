// 引入模块 - ES6
import JSONBigInt from 'json-bigint'

// let JSONBigIntStr = JSONBigInt({ storeAsString: true })
let JSONBigIntNative = JSONBigInt({ useNativeBigInt: true })
let jsonstr = `
            {
                "id": 9007199254740993,
                "list":[]
            }
        `
// console.log(JSONBigInt.parse(jsonstr));
// 转化成了 BigNumber 的对象，并不是想要的

// 转换成字符串的形式显示
// console.log(JSONBigIntStr.parse(jsonstr)); 

// 提供另一种方案，转为 BinInt
console.log(JSONBigIntNative.parse(jsonstr));
console.log(JSONBigIntNative.parse(jsonstr).id);