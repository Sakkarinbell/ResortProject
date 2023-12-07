import { db } from "../../config/firebase";
import { BOOKING_COLLECTION } from "../constants/db";
import { PENDING } from "../constants/status";

export const fetchBookings = async () => {
  try {
    const bookings = await db.collection(BOOKING_COLLECTION).get();
    const data = bookings.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", data: data };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const saveBookings = async (
  userId,
  roomId,
  checkIn,
  checkOut,
  guest,
  totalPrice,
  totalRoom,
  phoneNumber
) => {
  const data = await db.collection(BOOKING_COLLECTION).add({
    userId,
    roomId,
    checkIn,
    checkOut,
    guest,
    totalPrice,
    totalRoom,
    phoneNumber,
    status: PENDING,
  });
  return { success: true, message: "save booking success", id: data.id };
};
