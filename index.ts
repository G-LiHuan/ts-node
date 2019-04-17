import { NodeModuleTester } from './src/utils/util';

function main() {
  const tester = new NodeModuleTester('s1', 1);

  console.log(NodeModuleTester.STATIC_VAR);

  console.log(NodeModuleTester.testPath());

}
main();