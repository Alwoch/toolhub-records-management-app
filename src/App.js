import "./App.css";
import { Routes, Route } from "react-router-dom";
//bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className=".container-xxl" data-testid="app">
      <Routes>
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
