
import React, { Component }  from 'react'
import {Carousel,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './carousel.css';

class clubCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    };
  }
  componentDidMount() {
    console.log("componentDidMount componentDidMount componentDidMount");
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
            clubs: bookClubs.reverse()
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
      <div style={{ position: "relative", top: "600px" }}>
        {/* in order to make the coursel not go straight to the bottom */}
        {/* {this.props.lat != null && 
   <React.Fragment>
     </React.Fragment>} */}
 
   







        <Carousel>
          {this.state.clubs.map(
            (club, i) =>
              i < 10 && (
                <Carousel.Item>
                  <img
                    style={{ width: "800px", height: "300px", margin: "auto" }}
                    className="d-block w-100"
                    src={""+ club.image_url}
                    alt="Book Club"
                  />
                  <Carousel.Caption                       style={{ bottom: "25%", right: '25%'}}>
                    <Link

                      style={{ color: "blue"}}

                      to={"/bookclub/" + club.id}
                    >
                      <h3>{club.name}</h3>
                    </Link>

                    <h5 style={{ color: "blue" }}>

                      {" "}
                      {club.address.address_line1}, {club.address.city}{" "}
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              )
          )}
        </Carousel>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default clubCarousel;
