import { File } from './file';

export class Folder {
  id: string;
  name: string;
  files: Array<File>;

  constructor(id: string, name: string, files: Array<File>) {
    this.id = id;
    this.name = name;
    this.files = files;
  }
}
