import { storage } from "../config/firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

export const uploadFile = async (url, file) => {
  if (file === null) throw Error("Not found file");
  const imageRef = ref(storage, `${url}/${v4()}`);
  const value = await uploadBytes(imageRef, file);
  const imgURL = await getFileURL(value.ref);
  return imgURL;
};

export const uploadFiles = async (url, files) => {
  if (files.length === 0) throw Error("Not found file");
  const imagesURL = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const imageRef = ref(storage, `${url}/${v4()}`);
    const value = await uploadBytes(imageRef, file);
    const imgURL = await getFileURL(value.ref);
    imagesURL.push(imgURL);
  }

  return imagesURL;
};

export const getFileURL = async (ref) => {
  if (!ref) return "";
  const imageURL = await getDownloadURL(ref);
  return imageURL;
};

export const deleteFile = async (url) => {
  if (!url) throw Error("not found url");
  const fileRef = ref(storage, url);
  await deleteObject(fileRef);
};
