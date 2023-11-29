import { db } from "../../config/firebase";
import { ROOM_COLLECTION } from "../constants/db";

export const fetchRooms = async () => {
  try {
    const galleries = await db.collection(ROOM_COLLECTION).get();
    const data = galleries.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", galleries: data };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const fetchRoom = async (id) => {
  try {
    const gallery = await db.collection(ROOM_COLLECTION).doc(id).get();
    return { success: true, message: "query done", galleries: gallery.data() };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveRoom = async (total, size, type,bed,wifi,breakfast,images) => {
  const data = await db.collection(ROOM_COLLECTION).add({ total, size, type,bed,wifi,breakfast,images });
  return { success: true, message: "save user success", id: data.id };
};

export const deleteRoom = async (id) =>
  await db.collection(ROOM_COLLECTION).doc(id).delete();
