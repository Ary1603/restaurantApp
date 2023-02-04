import { useState } from "react";
import { MenuSidebar } from "./components/MenuSidebar";
import { Carrousel } from "./components/Carrousel";
import { FoodMenu } from "./components/FoodMenu";
import { FoodCard } from "./components/FoodCard";
import { Reservation } from "./components/Reservation";
import { AboutUs } from "./components/AboutUs";
import { FooterLR } from "./components/FooterLR";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";

//CSS
import "./app.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="principal-container">
                  <MenuSidebar />

                  <div className="second-container">
                    <Carrousel />
                    <FoodMenu />
                    <FoodCard />
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="reservation"
            element={
              <>
                <div className="principal-container">
                  <MenuSidebar />
                  <div className="second-container">
                    <Reservation />
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="about-us"
            element={
              <>
                <div className="principal-container">
                  <MenuSidebar />
                  <div className="second-container">
                    <AboutUs/>
                  </div>
                </div>
                <FooterLR/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
