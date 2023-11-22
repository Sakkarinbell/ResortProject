import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./CSS/navbar.css";
import "./CSS/footer.css";
import "./CSS/cart.css";
import "./CSS/DetailRoom.css";
import "./CSS/payment.css";
import "./CSS/qrcode.css";
import "./CSS/room.css";
import "./CSS/TypeGallery.css";
import "./CSS/gallery.css";
import "./CSS/promo.css";
import "./Component/Adminpage/admingal.css";
import "./Component/Adminpage/adminpro.css";
import "./Component/Adminpage/adminroom.css";
import "./Component/Adminpage/adminstatroom.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Accom from "./Component/Accommodation/Accom";
import Contactpage from "./Component/Contact/Contactpage";
import Gallerymain from "./Component/Gallerymain/Gallerymain";
import Login from "./Component/Login/Login";
import Promo from "./Component/Promotion/Promomain";
import Signup from "./Component/Login/Signup";
import Payment from "./Component/Accommodation/Payment";
import Gallery1 from "./Component/Gallerymain/Gallery1";
import Gallery2 from "./Component/Gallerymain/Gallery2";
import Gallery3 from "./Component/Gallerymain/Gallery3";
import Cartpage from "./Component/Cart/Cartpage";
import Detailroom from "./Component/Accommodation/Detailroom";
import Qrcode from "./Component/Accommodation/Qrcode";
import Adminstatusroom from "./Component/Adminpage/Admin_statusroom";

import Adminroom from "./Component/Adminpage/Admin_room";
import Adminpromo from "./Component/Adminpage/Admin_pro";
import Admingallary from "./Component/Adminpage/Admin_gallary";
import Adminlogin from "./Component/Adminpage/Admin_login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Accom",
    element: <Accom />,
  },
  {
    path: "Promo",
    element: <Promo />,
  },
  {
    path: "Contactpage",
    element: <Contactpage />,
  },
  {
    path: "Gallerymain",
    element: <Gallerymain />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <Signup />,
  },
  {
    path: "Payment",
    element: <Payment />,
  },
  {
    path: "Gallery1",
    element: <Gallery1 />,
  },
  {
    path: "Gallery2",
    element: <Gallery2 />,
  },
  {
    path: "Gallery3",
    element: <Gallery3 />,
  },
  {
    path: "Cartpage",
    element: <Cartpage />,
  },
  {
    path: "Detailroom",
    element: <Detailroom />,
  },
  {
    path: "Qrcode",
    element: <Qrcode />,
  },
  {
    path: "Admingallary",
    element: <Admingallary />,
  },
  {
    path: "Adminpromo",
    element: <Adminpromo />,
  },
  {
    path: "Adminroom",
    element: <Adminroom />,
  },

  {
    path: "Adminstatusroom",
    element: <Adminstatusroom />,
  },
  {
    path: "Adminlogin",
    element: <Adminlogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
