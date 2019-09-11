import React, { Component } from "react";
import {Card, Button} from "react-bootstrap";
import './myBookclubs.css';

export default class MyBookclubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: []
        };
      }

      componentDidMount(){
        console.log("componentDidMount componentDidMount componentDidMount")
        fetch("https://book-it.herokuapp.com/api/v1/current", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.JWT
          }
        })
          .then(e => e.json())
          .then(data => {
              console.log("data::" + data.book_clubs)
              this.setState({
                  clubs: data.book_clubs
              })
          })
          .catch(error => console.error("Error:", error));
        }


          render()  {

              return(
                <div>
                    <h2>My Book Clubs</h2>
                    <hr/>

                    {this.state.clubs.map((club,i) =>(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={club.image_url} />
                        <Card.Body>
                          <Card.Title>{club.name}</Card.Title>
                          <Card.Text>
                            {club.description}
                          </Card.Text>
                          <Button variant="primary">Go To Club Page</Button>
                          <Card.Footer className="text-muted">
                                Genre: {club.genre}
                              </Card.Footer>
                        </Card.Body>
                      </Card>
                    ))}
                </div>
              )
                    }
                }
          
