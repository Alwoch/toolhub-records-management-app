import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import "./Home.css";
import Navbar from "../Nav/Navbar";
const Home = () => {
  return (
    <main>
      <div className="navbar-div">
        <Navbar />
      </div>
      <section className="home-section">
        <div className="home-infodiv">
          <p className="home-info">
            The Wikimedia tool below is missing some important information. can
            you find it?
          </p>
          <p>
            Click <span>I got this</span> to add this information or{" "}
            <span>Next</span> to see another tool
          </p>
        </div>
        <div className="taskdiv">
          <div className="button-div">
            <button className="green">I got this!</button>
            <button className="blue">Next task</button>
          </div>
          <div className="search-tool">
            <input
              className="search"
              type="search"
              name="search"
              id="search"
              placeholder="find a tool"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
