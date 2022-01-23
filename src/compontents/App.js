import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Quiz from "./Quiz";
import senses from "../senses";

function App() {
  const createCard = (details) => {
    return (
      <Card
        imageURL={details.imageURL}
        title={details.title}
        content={details.content}
      />
    );
  };
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>FIVE SENSES</h1>

        <div className="cac">{senses.map(createCard)}</div>

        <div className=" video-grid">
          <iframe
            width="920"
            height="445"
            src="https://www.youtube.com/embed/LNajQTnZviQ"
          ></iframe>
        </div>

      <Quiz />
      
      </div>

      <Footer />
    </>
  );
}

export default App;
