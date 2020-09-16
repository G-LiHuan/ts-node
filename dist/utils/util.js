"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
class NodeModuleTester {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    static testPath() {
        const curdir = './';
        console.log(path.resolve(curdir));
    }
}
NodeModuleTester.STATIC_VAR = 'STATIC';
exports.NodeModuleTester = NodeModuleTester;
//# sourceMappingURL=util.js.map