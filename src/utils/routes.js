import Adminpromo from "../Component/Adminpage/Admin_pro";
import Adminroom from "../Component/Adminpage/Admin_room";
import Admingallary from "../Component/Adminpage/Admin_gallary";
import Gallery from "../Component/Gallerymain/Gallerymain.jsx";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/Login/Signup";
import {
  PATH_ADMIN_GALLERY,
  PATH_ADMIN_NEWS,
  PATH_ADMIN_ROOM,
  PATH_GALLERY,
  PATH_HOME,
  PATH_LOGIN,
  PATH_NEWS,
  PATH_SIGNUP,
} from "./constants/path";
import Promo from "../Component/Promotion/Promomain";

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
  login: {
    path: PATH_LOGIN,
    element: Login,
  },
  signup: {
    path: PATH_SIGNUP,
    element: Signup,
  },
  room: {
    path: PATH_ADMIN_ROOM,
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
    ],
    redirect: "/",
  },
  user: {
    allowRoutes: [component.home],
    redirect: "/",
  },
  admin: {
    allowRoutes: [
      component.room,
      component.home,
      component.adminNews,
      component.adminGallery,
    ],
    redirect: PATH_ADMIN_ROOM,
  },
};
