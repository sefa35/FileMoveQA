import File from './file';
import Folder from './folder';

type List = Array<Folder>;

function addFile(file: File, folder: Folder) {
  folder.files.push(file);
}

function removeFile(file: File, folder: Folder): File {
  let { files } = folder;
  files = files.filter((element) => element.id !== file.id);

  return file;
}

function searchFolderByFolderId(id: string, list: List): Folder {
  const folder = list.find((item: Folder) => item.id === id);
  if (folder === undefined || folder === null) {
    throw new Error('You cannot specify a file as the destination');
  }

  return folder;
}

function searchFolderByFileId(id: string, list: List): Folder {
  const folder = list.find((item: Folder) => {
    return item.files.some((file: File) => file.id === id);
  });

  if (folder === undefined || folder === null) {
    throw new Error('You cannot move a folder');
  }

  return folder;
}

function searchFileByFileId(id: string, folder: Folder): File {
  const file = folder.files.find((item: File) => item.id === id);
  if (file === undefined || file === null) {
    throw new Error('File not exists');
  }

  return file;
}

export {
  addFile,
  removeFile,
  searchFolderByFolderId,
  searchFolderByFileId,
  searchFileByFileId,
  List,
};
