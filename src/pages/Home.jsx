import { Button, Card, Form, FloatingLabel } from "react-bootstrap";
import hero from "../assets/images/hero.jpg";
import Menubar from "../components/Menubar";

export default function Home() {
  return (
    <>
      {/* <Layout> */}
      <Menubar />
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(37deg, rgba(43,7,36,1) 0%, rgba(233,105,189,1) 26%, rgba(233,105,189,1) 80%, rgba(43,7,36,1) 100%)",
          marginTop: "5rem",
        }}
      >
        {/* <Card style={{ backgroundColor: "#a11a5d" }}> */}
        <div className="row">
          <div className="col-8">
            <h4 style={{ color: "#ffffff" }}>Trending now!</h4>
          </div>
          <div className="col-4 p-0">
            <img
              style={{ width: "20rem", float: "right" }}
              src={hero}
              alt="hero"
            />
          </div>
        </div>
        {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
        {/* </Card> */}
      </div>
      {/* </Layout> */}
    </>
  );
}
