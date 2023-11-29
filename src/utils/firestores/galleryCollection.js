import { db } from "../../config/firebase";
import { GALLERY_COLLECTION } from "../constants/db";

export const fetchGalleries = async () => {
  try {
    const galleries = await db.collection(GALLERY_COLLECTION).get();
    const data = galleries.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", galleries: data };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveGallery = async (name, url, type) => {
  const data = await db.collection(GALLERY_COLLECTION).add({ name, url, type });
  return { success: true, message: "save user success", id: data.id };
};

export const deleteGallery = async (id) =>
  await db.collection(GALLERY_COLLECTION).doc(id).delete();
