import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import backgroundImage from "../image/slider-bg.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/user");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const generateNewId = () => {
    const ids = users.map((user) => user.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      id: generateNewId(),
      username: username,
      password: password,
      email: email,
      fullname: "", // Set this value as needed
      country: "", // Set this value as needed
      gender: "", // Set this value as needed
      phonenumber: "", // Set this value as needed
      isPrimeum: false, // Set this value as needed
      avatar: "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png",
      role: "USER",
      status: "active",
    };

    try {
      const response = await fetch("http://localhost:9999/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
       alert("User registered successfully:", newUser);
      } else {
       alert("Registration failed");
      }
    } catch (error) {
      alert("Error registering user:", error);
    }
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
            <h3>Sign Up</h3>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
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
          <Form.Group className="mb-3" controlId="formBasicRePassword">
            <Form.Label>Re-password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Pasword"
              value={rePassword}
              onChange={handleRePasswordChange}
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group style={buttonStyle}>
            <Button
              variant="danger"
              type="submit"
              size="lg"
              style={{ padding: "10px 120px", marginTop: '12px' }}
            >
              Sign up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
