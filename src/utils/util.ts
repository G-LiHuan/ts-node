import * as path from 'path';

export class NodeModuleTester {
  public static readonly STATIC_VAR = 'STATIC';

  constructor(
    private readonly f1: string,
    private readonly f2: number
  ) {}

  public static testPath() {
    const curdir = './';
    console.log(path.resolve(curdir));
  }
}
