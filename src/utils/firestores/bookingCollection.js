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

export const roomBooking = async (roomId, checkIn, checkOut) => {
  try {
    const bookings = await db
      .collection(BOOKING_COLLECTION)
      .where("roomId", "==", roomId)
      .get();
    const data = bookings.docs
      .filter(function (doc) {
        const data = doc.data();
        const isCheckInDup =
          new Date(data.checkIn).getTime() >= new Date(checkIn).getTime() &&
          new Date(data.checkIn).getTime() <= new Date(checkOut).getTime();
        const isCheckOutDup =
          new Date(data.checkOut).getTime() >= new Date(checkIn).getTime() &&
          new Date(data.checkOut).getTime() <= new Date(checkOut).getTime();
        return isCheckInDup && isCheckOutDup;
      })
      .map((doc) => ({ ...doc.data(), id: doc.id }));
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
