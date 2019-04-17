"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./src/utils/util");
function main() {
    const tester = new util_1.NodeModuleTester('s1', 1);
    console.log(util_1.NodeModuleTester.STATIC_VAR);
    console.log(util_1.NodeModuleTester.testPath());
}
main();
