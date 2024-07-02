import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg"; // Đường dẫn đến hình ảnh nền

export default function ResetPassword() {
  const [passwordnew, setPasswordNew] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");

  const handlePasswordNewChange = (e) => {
    setPasswordNew(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PasswordNew:", passwordnew);
    console.log("PasswordConfirm:", passwordconfirm);
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
            <h3>Enter New Password</h3>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="passwordnew"
              placeholder="New Password"
              value={passwordnew}
              onChange={handlePasswordNewChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={passwordconfirm}
              onChange={handlePasswordConfirmChange}
            />
            
          </Form.Group>
          <Form.Group style={buttonStyle}>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              style={{ padding: "10px 100px" }}
            >
              Continue
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};


