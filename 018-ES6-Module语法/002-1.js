const odiv = document.querySelector('div');
console.log(odiv);

function A1() {
    console.log("A1");
}

function A2() {
    console.log("A2");
}

function test() {
    console.log("1.js test");
}

// 导出方法
// export default A1
// 导出 A2
// default 只能用一次，否则报错
// export default A2

// 以代码块的形式导出
// const obj = {
//     A1,
//     A2
// }
// export default obj 
// 直接简写
export default {
    A1,
    A2,
    test
}