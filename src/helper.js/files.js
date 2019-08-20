export class files {
    
    async readFiles(dataTransfer) {
        let parent = {parent: []}
        let current = parent.parent;
        let items = dataTransfer.items;
        for( item of items ) {
            let fileOrFolder = item.webkitGetAsEntry();
            if(fileOrFolder.isFile) {
                current.push(fileOrFolder);
            } else if(fileOrFolder.isDirectory) {

            }
        }
    }
}

export default files
