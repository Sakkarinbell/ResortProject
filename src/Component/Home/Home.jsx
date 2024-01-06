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
      <div>
       <h2 className="section__header-1">Recommend Room</h2>
       <RoomRec />
      </div>
      
      
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
