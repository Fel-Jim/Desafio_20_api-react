import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = () => {
  const [digimon, setDigimon] = useState("Agumon");
  const [digimonData, setDigimonData] = useState([]);

  const searchDigimon = () => {
    const apiUrl = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setDigimonData(response.data);
      })
      .catch((err) => {
        console.log("Error con Api", err);
      });
  };

  useEffect(() => {
    searchDigimon();
  }, [digimon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDigimon(e.target[0].value);
  };

  return (
    <>
      <div className="imgTop  d-flex h-10 w-10 justify-content-center">
        <img
          className="imgBox"
          src="https://traptortoys.com/wp-content/uploads/2021/10/banner-digimon.jpg"
          alt="banner digimon"
        />
      </div>
      <Container className="ContainerBox d-grid justify-content-center">
        <h1>Digimon API</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Busca tu Digimon</Form.Label>
            <Form.Control type="text" placeholder="Ingresa nombre de Digimon" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <div className="mt-5 d-flex justify-content-center gap-3 border border-dark rounded border-2 ">
          {digimonData ? (
            digimonData.map((item) => (
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <span className="Nombre">Nombre: </span>
                    {item.name} <br />
                    <span className="level">Level: </span>
                    {item.level}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>No se encuentran datos</h1>
          )}
        </div>
      </Container>
      ;
    </>
  );
};

export default MiApi;
