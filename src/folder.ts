import File from './file';

class Folder {
  id: string;

  name: string;

  files: Array<File>;

  constructor(id: string, name: string, files: Array<File>) {
    this.id = id;
    this.name = name;
    this.files = files;
  }
}

export default Folder;
