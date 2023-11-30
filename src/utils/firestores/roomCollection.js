import { db } from "../../config/firebase";
import { ROOM_COLLECTION } from "../constants/db";

export const fetchRooms = async () => {
  try {
    const rooms = await db.collection(ROOM_COLLECTION).get();
    const data = rooms.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", data };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const fetchRoom = async (id) => {
  try {
    const room = await db.collection(ROOM_COLLECTION).doc(id).get();
    return { success: true, message: "query done", data: room.data() };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveRoom = async (
  totalRoom,
  size,
  name,
  price,
  priceSale,
  point,
  vote,
  images
) => {
  const data = await db
    .collection(ROOM_COLLECTION)
    .add({ totalRoom, size, name, price, priceSale, point, vote, images });
  return { success: true, message: "save user success", id: data.id };
};

export const deleteRoom = async (id) =>
  await db.collection(ROOM_COLLECTION).doc(id).delete();

export const updateRoom = async (
  id,
  totalRoom,
  size,
  name,
  price,
  priceSale,
  images
) =>
  await db
    .collection(ROOM_COLLECTION)
    .doc(id)
    .set({ totalRoom, size, name, price, priceSale, images });
