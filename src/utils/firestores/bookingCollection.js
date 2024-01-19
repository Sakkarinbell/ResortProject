import { db } from "../../config/firebase";
import { BOOKING_COLLECTION } from "../constants/db";
import { fetchRoom } from "./roomCollection";
import { fetchUser } from "./userCollection";

export const fetchBookings = async () => {
  try {
    const bookings = await db.collection(BOOKING_COLLECTION).get();
    const bookingsWithUsersAndRooms = [];
    for (let index = 0; index < bookings.docs.length; index++) {
      const doc = bookings.docs[index];
      const dataDoc = doc.data();
      const { user } = await fetchUser(dataDoc.userId);
      const { data: room } = await fetchRoom(dataDoc.roomId);
      bookingsWithUsersAndRooms.push({ ...dataDoc, user: user.data(), room: room });
    }
    // const data = bookings.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return {
      success: true,
      message: "query done",
      data: bookingsWithUsersAndRooms,
    };
  } catch (error) {
    return { success: false, message: error?.stack };
  }
};

export const fetchBookingUsers = async (userId) => {
  try {
    const bookings = await db
      .collection(BOOKING_COLLECTION)
      .where("userId", "==", userId)
      .get();
      const bookingsWithUsersAndRooms = [];
      for (let index = 0; index < bookings.docs.length; index++) {
        const doc = bookings.docs[index];
        const dataDoc = doc.data();
        const { user } = await fetchUser(dataDoc.userId);
        const { data: room } = await fetchRoom(dataDoc.roomId);
        bookingsWithUsersAndRooms.push({ ...dataDoc, user: user.data(), room: room });
      }
    // const data = bookings.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { success: true, message: "query done", data: bookingsWithUsersAndRooms };
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
  price,
  totalRoom,
  status,
  billId
) => {
  const data = await db.collection(BOOKING_COLLECTION).add({
    billId,
    userId,
    roomId,
    checkIn,
    checkOut,
    guest,
    price,
    totalRoom,
    status,
  });
  return { success: true, message: "save booking success", id: data.id };
};

export const updateBooking = async (billId, status) => {
  const booking = await db
    .collection(BOOKING_COLLECTION)
    .where("billId", "==", billId)
    .get();
  const docs = booking.docs;
  for (let index = 0; index < docs.length; index++) {
    const doc = docs[index];
    const data = doc.data();
    console.log("data", data);
    if (data.status !== status) {
      await db
        .collection(BOOKING_COLLECTION)
        .doc(doc.id)
        .set({
          ...data,
          status,
        });
    }
  }
};
