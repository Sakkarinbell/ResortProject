import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="imagebk">
      <div className="welcometext">
        <h5>Welcome</h5>
        <h2>Saengthong Beach Resort</h2>
        <p>Jantaburi , Thailand</p>
        <button className="btnbooknow" onClick={() => navigate("/Accom")}>
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Welcome;
