import Navbar from "../Navbar";
import Footer from "../Footer";
import Welcome from "../Home/Welcome";
import Promotions from "../Home/Promotion";
import Gallery from "../Home/Gallary";
import RoomRec from "../Home/RoomRec";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Promotions />
      <RoomRec />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
