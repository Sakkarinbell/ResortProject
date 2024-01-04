import { db } from "../../config/firebase";
import { EVENT_COLLECTION } from "../constants/db";

export const fetchEvents = async () => {
  try {
    const events = await db.collection(EVENT_COLLECTION).get();
    const data = events.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", data };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const fetchEvent = async (id) => {
  try {
    const event = await db.collection(EVENT_COLLECTION).doc(id).get();
    return { success: true, message: "query done", data: event.data() };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveEvent = async (eventName, description, imageURL) => {
  const data = await db
    .collection(EVENT_COLLECTION)
    .add({ eventName, description, imageURL });
  return { success: true, message: "save user success", id: data.id };
};

export const deleteEvent = async (id) =>
  await db.collection(EVENT_COLLECTION).doc(id).delete();

export const updateEvent = async (id, eventName, description, imageURL) =>
  await db
    .collection(EVENT_COLLECTION)
    .doc(id)
    .set({ eventName, description, imageURL });
