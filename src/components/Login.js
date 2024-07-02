import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg"; // Đường dẫn đến hình ảnh nền
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    axios
      .get("http://localhost:9999/user")
      .then((res) => {
        const userData = res.data;
        const foundUser = userData.find(
          (item) => item.username === username && item.password === password
        );
        if (foundUser) {
          // Đăng nhập thành công, chuyển hướng đến trang Home
          localStorage.setItem("user", JSON.stringify(foundUser));
          window.location.href = "/";
        } else {
          // Hiển thị thông báo đăng nhập không hợp lệ
          setMessage("Invalid username or password. Please try again.");
        }
      })
      .catch((error) => console.error(error));
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
    marginTop: "90px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "50px",
    borderRadius: "10px",
  };
  const buttonStyle = {
    width: "100%", // Đảm bảo nút chiếm toàn bộ chiều rộng của form
    fontSize: "20px", // Kích thước chữ của nút
    textAlign: "center",
    marginTop: "12px"
  };

  return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <Form onSubmit={handleLogin}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ textAlign: "center" }}
          >
            <h3>Login</h3>
          </Form.Group>
          {message.length > 0 && <Alert variant="danger">{message}</Alert>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 6 }}>
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col sm={{ span: 6 }}>
              <Link>Forget Password?</Link>
            </Col>
          </Form.Group>

          <Form.Group style={buttonStyle}>
            <Button
              variant="danger"
              type="submit"
              size="md"
              style={{ width: '100%' }}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
