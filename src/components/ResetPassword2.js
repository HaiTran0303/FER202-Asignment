import React, { useState } from "react";
import { Form, Button,Row,Col} from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg"; // Đường dẫn đến hình ảnh nền

export default function ResetPassword2() {
    const [email, setEmail] = useState("");
  
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // Do something with the login data, like send it to an API
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "60px",
    borderRadius: "10px",
  };
  const buttonStyle = {
    width: "100%", // Đảm bảo nút chiếm toàn bộ chiều rộng của form
    fontSize: "20px", // Kích thước chữ của nút
    textAlign: "center",
  };
  return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ textAlign: "center" }}
          >
            <h3>Reset Password</h3>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">
              Enter the email you used to sign up for Fermovie account and we'll send you the steps required to reset your password
            </Form.Text>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="What's your email?"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          
          <Form.Group as={Row} style={buttonStyle}>
          <Col>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              style={{ padding: "10px 100px" }}
            >
              Continue
            </Button>
            </Col>
            <Col>
            <Button
              variant="secondary"
              type="submit"
              size="lg"
              style={{ padding: "10px 100px" }}
            >
              Cancel
            </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

