import {
  addFile,
  removeFile,
  searchFolderByFolderId,
  searchFolderByFileId,
  searchFileByFileId,
  List,
} from './folderOperations';

export default function move(list: List, source: string, destination: string): List {
  const destinationFolder = searchFolderByFolderId(destination, list);
  const sourceFolder = searchFolderByFileId(source, list);
  const file = searchFileByFileId(source, sourceFolder);

  removeFile(file, sourceFolder);
  addFile(file, destinationFolder);

  return list;
}
