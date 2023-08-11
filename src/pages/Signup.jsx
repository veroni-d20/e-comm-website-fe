import { Button, Card, Form, FloatingLabel } from "react-bootstrap";
import Menubar from "../components/Menubar";

export default function Signup() {
  return (
    <>
      <div className="vh-100" style={{ background: "#f1e1de" }}>
        <Menubar />
        <div className="vh-100 vw-100 m-0 d-flex align-items-center justify-content-center">
          <Card style={{ width: "23rem" }} className="shadow login-card">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/18/e1/d0/18e1d00d1b72badba290af183b8ebaeb.png"
            />
            <Card.Body>
              <Card.Title className="my-2">Signup</Card.Title>
              <div className="my-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="my-3"
                >
                  <Form.Control type="password" />
                </FloatingLabel>
                <Button
                  className="p-2 w-100"
                  style={{
                    backgroundColor: "#ff3f6c",
                    borderRadius: 0,
                    border: "none",
                  }}
                >
                  Submit
                </Button>
                <div className="mt-3 text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "black" }}>
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
