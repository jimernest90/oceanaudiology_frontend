import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const HomeCarousel = () =>{
    return(
     <Carousel style={{width: '40em', marginTop: '10em', boxShadow:'3px 5px 5px'}}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.worldatlas.com/r/w963-h562-c963x562/upload/dc/60/14/shutterstock-1389359966.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.worldatlas.com/r/w963-h562-c963x562/upload/dc/60/14/shutterstock-1389359966.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldatlas.com/r/w963-h562-c963x562/upload/dc/60/14/shutterstock-1389359966.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default HomeCarousel