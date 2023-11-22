import Navbar from "../Navbar";
function Galleryselect() {
  return (
    <>
      <Navbar />
      <section className="container-gallery">
        <div className="slide-container">
          <div className="slider">
            <img id="slide-1" src="picture/ex.jpg" alt="#" />

            <img id="slide-2" src="picture/gallery.jpg" alt="#" />

            <img id="slide-3" src="picture/pool.jpg" alt="#" />
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Galleryselect;
