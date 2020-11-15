import React from "react";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
export default function App() {
  return (
    <Router>
<nav>
  <Link to="/">Home</Link>
</nav>
      <Routes>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome to our shoe store!</h1>
    </div>
  );
}

const shoes = {
  "air-jordan-3-valer-blue": {
    name: "VALOUR BLUE",
    img: "",
  },
  "jordan-mars-270-londons": {
    name: "JORDAN MARS 270 LONDON",
    img: "",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER",
    img: "",
  },
};
