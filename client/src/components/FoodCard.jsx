import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export function FoodCard() {
  const [food, setfood] = useState([]);
  const fetchParkingPlaces = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.menuItems);
        setfood(data.menuItems);
        console.log(food);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  };

  useEffect(() => {
    fetchParkingPlaces(
      "https://api.spoonacular.com/food/menuItems/search?apiKey=3c47db6fc40a426197e145e4cde4a32a&query=pizza"
    );
  }, []);
  // console.log(food[0].title);
  return (
    <>
      <Container>
        <Row>
          {food.map((item, index) => (
            <Col>
              <Card key={index} style={{ width: "18rem" }}>
                <span>$$$</span>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
