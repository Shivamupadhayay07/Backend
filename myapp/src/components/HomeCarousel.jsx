import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  return (
    <div >
    <Carousel fade>
    <Carousel.Item>
      <img style={{width:"100vw", height:"58vw"}} src="https://cdn-img1.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery" alt=""  />    
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  style={{width:"100vw", height:"58vw"}} src="https://ak-d.tripcdn.com/images/100i1c000001dw7ci954D.100" alt=""  />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  style={{width:"100vw" , height:"58vw"}} src="https://images.gulfnews.com/embedded/polopoly_fs/1.1885807.1472219792!/image/1334730431.jpg" alt=""  />     
       <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarousel
