import React from "react";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
export default function App() {
  return (
    <Router>
<nav>
  <Link to="/" className="home">Home</Link>
  <Link to="/Launch" className="home">Launch</Link>
</nav>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="Launch" element={<Launch />}>
   <Route path="/" elemetn={<Launchindex />} />

        </Route>
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
function Launch(){
  return(
     <div>
       <h1>Launch</h1>
     </div>
  )
}
function Launchindex(){
  
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
