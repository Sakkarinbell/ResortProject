import { db } from "../../config/firebase";
import { USER_COLLECTION } from "../constants/db";

export const fetchUser = async (userId) => {
  try {
    const user = await db.collection(USER_COLLECTION).doc(userId).get();
    return { success: true, message: "query done", user };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveUser = async (userId, firstName, lastName, role = "user") => {
  await db
    .collection(USER_COLLECTION)
    .doc(userId)
    .set({ firstName, lastName, role });
  return { success: true, message: "save user success" };
};
