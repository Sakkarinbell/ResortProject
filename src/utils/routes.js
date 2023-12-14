import Adminpromo from "../Component/Adminpage/Admin_pro";
import Adminroom from "../Component/Adminpage/Admin_room";
import Admingallary from "../Component/Adminpage/Admin_gallary";
import Gallery from "../Component/Gallerymain/Gallerymain.jsx";
import Accommodation from "../Component/Accommodation/Accom.jsx";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/Login/Signup";
import {
  PATH_ACOMMODATIONS,
  PATH_ADMIN_GALLERY,
  PATH_ADMIN_NEWS,
  PATH_ADMIN_ROOM,
  PATH_ADMIN_ROOM_LIST,
  PATH_ADMIN_BOOKING_LIST,
  PATH_DETAILROOM,
  PATH_EDIT_ROOM,
  PATH_GALLERY,
  PATH_HOME,
  PATH_LOGIN,
  PATH_NEWS,
  PATH_SIGNUP,
  PATH_CONTACT,
  PATH_ACCOUNT,
} from "./constants/path";
import Contact from "../Component/Contact/Contactpage";
import Promo from "../Component/Promotion/Promomain";
import Detailroom from "../Component/Accommodation/Detailroom.jsx";
import AdminRoomList from "../Component/Adminpage/AdminRoomList.jsx";
import AdminBooking from "../Component/Adminpage/AdminBooking";
import Account from "../Component/Account/Account";

const component = {
  home: {
    path: PATH_HOME,
    element: Home,
  },
  news: {
    path: PATH_NEWS,
    element: Promo,
  },
  gallery: {
    path: PATH_GALLERY,
    element: Gallery,
  },
  contact: {
    path: PATH_CONTACT,
    element: Contact,
  },
  login: {
    path: PATH_LOGIN,
    element: Login,
  },
  signup: {
    path: PATH_SIGNUP,
    element: Signup,
  },
  account: {
    path: PATH_ACCOUNT,
    element: Account,
  },
  acommodation: {
    path: PATH_ACOMMODATIONS,
    element: Accommodation,
  },
  detail: {
    path: PATH_DETAILROOM,
    element: Detailroom,
  },
  room: {
    path: PATH_ADMIN_ROOM_LIST,
    element: AdminRoomList,
  },
  adminbooking: {
    path: PATH_ADMIN_BOOKING_LIST,
    element: AdminBooking,
  },
  createRoom: {
    path: PATH_ADMIN_ROOM,
    element: Adminroom,
  },
  editRoom: {
    path: PATH_EDIT_ROOM,
    element: Adminroom,
  },
  adminNews: {
    path: PATH_ADMIN_NEWS,
    element: Adminpromo,
  },
  adminGallery: {
    path: PATH_ADMIN_GALLERY,
    element: Admingallary,
  },
};

export default {
  guest: {
    allowRoutes: [
      component.home,
      component.login,
      component.signup,
      component.news,
      component.gallery,
      component.acommodation,
      component.detail,
      component.contact,
    ],
    redirect: PATH_HOME,
  },
  user: {
    allowRoutes: [
      component.home,
      component.login,
      component.signup,
      component.news,
      component.gallery,
      component.acommodation,
      component.detail,
      component.contact,
      component.account,
    ],
    redirect: PATH_HOME,
  },
  admin: {
    allowRoutes: [
      component.room,
      component.home,
      component.adminbooking,
      component.adminNews,
      component.adminGallery,
      component.createRoom,
      component.editRoom,
    ],
    redirect: PATH_ADMIN_ROOM_LIST,
  },
};
