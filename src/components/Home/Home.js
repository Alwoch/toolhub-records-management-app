import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from 'react-bootstrap/Card'
import "./Home.css";
import Navbar from "../Nav/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className=".container-xxl">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="search tool"
            aria-label="search tool"
            aria-describedby="basic-addon2"
          />
          <Button
            className="button"
            variant="outline-secondary"
            id="button-addon2"
          >
            search
          </Button>
        </InputGroup>
        <p className="home-info">
          The Wikimedia tool below is missing some important information. can
          you find it?
        </p>
        <p>
          Click <span>I got this</span> to add this information or{" "}
          <span>Next</span> to see another tool
        </p>
    <Card>
      <Card.Header>Tool:</Card.Header>
      <Card.Body>
        <Card.Title>Pywikibot</Card.Title>
        <Card.Text>
          api_url
        </Card.Text>
        <Button variant="primary">I Got this!</Button>
        <Button variant="primary">Next Tool</Button>
      </Card.Body>
    </Card>
      </section>
    </>
  );
};

export default Home;
