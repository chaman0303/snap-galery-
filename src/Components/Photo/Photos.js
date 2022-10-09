import React from "react";
import { Container, Card, Row, Col, Spinner } from "react-bootstrap";
import "./Photos.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Photos() {
  const [photos, setphotos] = useState([]);
  // const [allphotos, setallphotos] = useState(false);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setphotos(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={10}>
          <h1 className="display-4" style={{ textAlign: "left" }}>
            Photos
          </h1>
          <p className="lead" style={{ textAlign: "left" }}>
            Explore Range Of Image from Unsplash
          </p>
        </Col>
        {/* <Col md={2}>
          <Button variant="dark" size="lg" onClick={()=> setallphotos(!allphotos)}>
            {allphotos ? "Hide" : "Show"} All Photos
          </Button>
        </Col> */}
      </Row>

      <hr></hr>
      <Row>
        {/* {allphotos && */}
        {photos.length ? (
          photos.map((photo) => (
            <Col md={4} className="photos-card" key={photo.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={photo.download_url} />
                <Card.Body>
                  <Card.Title>{photo.author}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="dark">View More Details</Button> */}
                  <a
                    className="btn btn-dark"
                    href={photo.url}
                    style={{ marginRight: "10px" }}
                  >
                    View Details
                  </a>
                  <Link
                    className="btn btn-dark"
                    href={photo.url}
                    to={`/photos/${photo.id}`}
                  >
                    View Large
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner animation="border"/>
        )}
      </Row>
    </Container>
  );
}

export default Photos;
