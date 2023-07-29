import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const apiBaseUrl = "http://localhost:5000";

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { username, password } = event.target.elements;
    console.log(username.value, "username");
    console.log(password.value, "password");
    let groupId = 2;

    axios
      .post(`${apiBaseUrl}/users`, {
        username: username.value,
        password: "password",
        groupId,
      })
      .then(() => {
        localStorage.setItem("username", username.value);
        localStorage.setItem("groupId", groupId);

        navigate("/tasks");

        navigate("/tasks");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Row
        style={{
          marginTop: "20px",
          height: "70vh",
        }}
      >
        <Col
          md={4}
          style={{
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <h1>Login </h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Please enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button size="large" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
