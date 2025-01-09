import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Home = (props) => {

  const [melonChart, setMelonChart] = useState();
  
  useEffect(() => {
    fetch('https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live', {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => res.json())
      .then(json => {
        const dataToArr = Object.entries(json).map((e) =>  e[1]);
        setMelonChart(dataToArr);
      })
    }, [])
    console.log(melonChart);

  
  return (
    <>
    <Container fluid="sm, md, lg">
      <Card.Body className="card-body-title">
        <Row>
          <Col xs={3}md lg={1}>Ranking</Col>
          <Col xs={6} md={6} lg={3}>Song Title</Col>
          <Col xs={3}>Artist</Col>
        </Row>
      </Card.Body>
        {melonChart && melonChart.map(track => {
          return  (
            <Card className="bg-transparent">
              <Link to={'/songs/' + track.name} key={track.ranking}onClick={() => {
                props.handleOnClick(track)
              }}>
                <Card.Body>
                  <Row>
                    <Col xs={3} md lg={1}>{track.ranking}.</Col>
                    <Col xs={6} md={6} lg={3}>{track.name}</Col>
                    <Col xs={3}>{track.artists}</Col>
                  </Row>
                </Card.Body>
              </Link>
            </Card> 
          )
      })}
    </Container>
    
    
    </>
  )
}

export default Home;