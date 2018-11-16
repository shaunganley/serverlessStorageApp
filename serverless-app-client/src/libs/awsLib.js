import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    const filename = `${Date.now()}-${file.name}`;

    await Storage.vault.put(filename, file, {contentType: file.type})
        .then (result => console.log(result))
        .catch(err => console.log(err));

  return;
}

export async function s3List() {
    var files = {};
    await Storage.vault.list('')
        .then (result => files = result)
        .catch(err => console.log(err));

    return files;
  }