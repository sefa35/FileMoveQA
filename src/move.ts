import {
  addFile,
  removeFile,
  searchFolderByFolderId,
  searchFolderByFileId,
  searchFileByFileId,
  List,
} from './folderOperations';

// Please update this type as same as with the data shape.
//type List = Array<{ id: string; name: string; files: Array<{ id: string; name: string }> }>;

export default function move(list: List, source: string, destination: string): List {
  let destinationFolder = searchFolderByFolderId(destination, list);
  let sourceFolder = searchFolderByFileId(source, list);
  let file = searchFileByFileId(source, sourceFolder);

  removeFile(file, sourceFolder);
  addFile(file, destinationFolder);

  return list;
}
