// 引用 1.js 模块，2.js 文件也就具有 1.js 模块的方法
export * as obj2 from './005-1.js'

export default {
    name: "2222"
}

export function test2() {

}

export const list1 = ["22222", "22222"]