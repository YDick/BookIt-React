import React, { Component }  from 'react'
import {Carousel,} from "react-bootstrap";
import { Link } from 'react-router-dom'
class clubCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []      
    };
  }
  componentDidMount(){
    console.log("componentDidMount componentDidMount componentDidMount")
    fetch("https://book-it.herokuapp.com/api/v1/book_clubs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.JWT
      }
    })
      .then(e => e.json())
      .then(data => {
        let bookClubs = data.book_clubs;
        console.log("let", bookClubs);
        
        this.setState(
          {
            clubs: bookClubs
          },
          () => {
            console.log("State::::", this.state.clubs);
          }
        );
        
      })
      .catch(error => console.error("Error:", error));

  }

  render() {
    return (

<Carousel>
  {this.state.clubs.length > 0 && 
  <Carousel.Item>
    <img
     style={{width: '800px', height: '300px', margin: 'auto'}}
     className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="First club"
    />
    <Carousel.Caption>
      <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -1].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -1].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>
  }
    {this.state.clubs.length > 1 && 
  <Carousel.Item>
    <img
     style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="second club"
    />
    <Carousel.Caption>
      <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -2].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -2].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>
    }
        {this.state.clubs.length > 2 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="Second slide"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -3].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -3].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 3 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="Fourth slide"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -4].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -4].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 4 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="Fith club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -5].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -5].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 5 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="sixth club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -6].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -6].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

{this.state.clubs.length > 6 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="seventh club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -7].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -7].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 7 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="eighth club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -8].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -8].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 7 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="eighth club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -8].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -8].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

  {this.state.clubs.length > 8 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="nineth club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -9].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -9].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}

{this.state.clubs.length > 9 && 
  <Carousel.Item>
    <img
         style={{width: '800px', height: '300px', margin: 'auto'}}
      className="d-block w-100"
      src="https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-gray-808080-4096x2160-TV4K.png?v=20171211195613"
      alt="tenth club"
    />

    <Carousel.Caption>
    <Link to="/login"><h3>{this.state.clubs[this.state.clubs.length -10].name}</h3></Link>
      <p>{this.state.clubs[this.state.clubs.length -10].address.city}</p>
    </Carousel.Caption>
  </Carousel.Item>}
</Carousel>


    )}



}


export default clubCarousel