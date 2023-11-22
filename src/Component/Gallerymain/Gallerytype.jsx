import { useNavigate } from "react-router-dom";

function Gallerytype() {
  const navigate = useNavigate();
  return (
    <div className="spacex">
      <section className="space">
        <figure className="container" onClick={() => navigate("/Gallery1")}>
          <img src="picture/gallery.jpg" alt="sample89" />
          <figcaption>
            <h3>ROOM</h3>
          </figcaption>
        </figure>
        <figure className="container" onClick={() => navigate("/Gallery2")}>
          <img src="picture/pool.jpg" alt="sample94" />
          <figcaption>
            <h3>FACILITIES</h3>
          </figcaption>
        </figure>
        <figure className="container" onClick={() => navigate("/Gallery3")}>
          <img src="picture/gallery.jpg" alt="sample92" />
          <figcaption>
            <h3>EVENTS</h3>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}

export default Gallerytype;
