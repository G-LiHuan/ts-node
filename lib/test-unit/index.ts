import path from 'path';

export default class TestUnit {
  getTestFileName(fileName: string): string {
    const dirName = path.dirname(fileName);
    const baseName = path.basename(fileName);
    const extName = path.extname(fileName);
    const fullName = baseName.replace(extName, `.spec${extName}`);
    return path.format({
      root: dirName + '/__test__/',
      base: fullName,
    });
  }
}