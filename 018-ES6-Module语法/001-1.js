// let div = document.querySelector("div")
// console.log(div);

function A1() {
    _a1()
    console.log("A1");
}

// 代表私有，不被其他js文件调用，但是其他的js文件还是可以调用
function _a1() {
    console.log("a1");
}

function test() {
    console.log("1.js - test");
}