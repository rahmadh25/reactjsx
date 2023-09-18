import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { product } from "./product";

import { Container, Nav, Navbar } from "react-bootstrap";


function App() {
  let firstName = "rahma";
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card style={{ width: "45rem", minHeight: "35rem" }}>
        <Card.Img variant="top" src={product.url} />

        <Card.Body>
          <Name />

          <Card.Text>
            <Price />
          </Card.Text>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      {firstName ? (
        <div>
          <h1>Hello {firstName}</h1>
          <img
            src="https://th.bing.com/th/id/OIP.Q_Q5NqPMRKxQpiYlI7yLTAAAAA?w=228&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            width="250px"
          />
        </div>
      ) : (
        <h1>Hello there</h1>
      )}
    </div>
  );
}
  

export default App;
