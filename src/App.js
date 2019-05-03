import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
        <div>
            <NavBar />
            {/* <Wrapper>

            </Wrapper> */}
            <Footer />
        </div>
    </Router>

  );
}

export default App;