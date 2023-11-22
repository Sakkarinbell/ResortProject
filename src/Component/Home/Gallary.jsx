import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
  return (
    <div className="gallery">
      <div className="gallery-text">
        <h5>View</h5>
        <h2>Gallery</h2>
        <p>
          View the photo gallery to inspire your next vacation at Saengthong
          beach Resort
        </p>
        <a
          href="#"
          className="btn-pro"
          onClick={() => navigate("/Gallerymain")}
        >
          See More
        </a>
      </div>
      <div className="gallery-img">
        <img src="picture/gallery.jpg" alt="icon" />
      </div>
    </div>
  );
}

export default Gallery;
