import { fetchGalleries } from "../../utils/firestores/galleryCollection";
import { useState, useEffect } from "react";

function Gallerytype() {
  const [galleries, setGalleries] = useState([]);
  const onFetchGallery = async () => {
    const { galleries } = await fetchGalleries();
    setGalleries(galleries || []);
  };

  useEffect(() => {
    onFetchGallery();
  }, []);
  return (
    <div className="spacex">
      <section className="space">
        {galleries.map((gallery) => (
          <figure className="container" key={gallery.id}>
            <img src={gallery.url || "/icon.png"} alt="sample89" />
            <figcaption>
              <h3>{gallery.name}</h3>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}

export default Gallerytype;
