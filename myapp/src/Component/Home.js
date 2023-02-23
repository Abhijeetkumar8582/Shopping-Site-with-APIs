import React, { useLayoutEffect } from 'react';
import Carousel1 from "./Carousel1.png";
import Carousel2 from "./Carousel2.png";
import Carousel3 from "./Carousel3.png";
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    useLayoutEffect(()=>{
        document.body.style.backgroundColor="white"
    })
  return (
    <div>
        <div className='container text-center'>  <h1 style={{margin:"60px"}}>Welcome to Shopping Buddy</h1></div>
     <div id="carouselExampleControls" style={{margin:"-30px"}} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner my-1">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={Carousel1} style={{height:"400px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Carousel2} style={{height:"400px"}} class="d-block w-100" alt={"Main_page"}/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Carousel3} style={{height:"400px"}} class="d-block w-100" alt={"Main_page"}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='container text-center'  style={{margin:"30px 100px"}}>
    <ReactTypingEffect
    
        text={["Discover the latest trends and shop your style with our wide range of products.", "Shop now and get up to 50% off on your favorite brands!"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h4>
              {text.split('').map((char, i)  => {
                // console.log(char,"char")
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'black'} : {}}
                  >{char}</span>
                );
              })}
            </h4>
          );
        }}    
        eraseSpeed={50}
      />
      </div>
     

    
    </div>
  )
}

export default Home
