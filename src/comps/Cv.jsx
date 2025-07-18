import "../styles/cv.css";
import html2canvas from "html2canvas";

export default function Cv({ formData }) {

    function downloadImage() {
        const cvElement = document.getElementById("cv-div");
        if(!cvElement) return;

        html2canvas(cvElement).then((canvas) => {
            const link = document.createElement("a");
            link.download = "CV.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        })
    }

  return (
    <div className="all-div">
        <div className="cv" id="cv-div">
          <h1 className="name">{formData.name}</h1>
          <hr className="cv-hr" />
          <div className="details">
            <img src="./case.png" alt="briefcase-logo" />
            <p>{formData.profession}</p>
          </div>
          <div className="details">
            <img src="./email.png" alt="email-logo" />
            <p>{formData.email}</p>
          </div>
          <div className="details">
            <img src="./phone.png" alt="phone-logo" />
            <p>{formData.phone}</p>
          </div>
          <div className="details last-details">
            <img src="./address.png" alt="address-logo" />
            <p>{formData.address}</p>
          </div>
          <hr className="cv-hr" />
          <div className="about-me">
            <h3>About Me</h3>
            <p className="about-p">{formData.about}</p>
          </div>
        </div>

        <div>
            <button onClick={downloadImage}>Download CV as an Image!</button>
        </div>
    </div>
  );
}
