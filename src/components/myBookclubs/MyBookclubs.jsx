import React, { Component } from "react";
import {Card, CardGroup, Button} from "react-bootstrap";
import './myBookclubs.css';

export default class MyBookclubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myclubs: [],
            clubs: []
        };
      }

      componentDidMount(){
        console.log("componentDidMount componentDidMount componentDidMount")
        // fetch myclubs
        fetch("https://book-it.herokuapp.com/api/v1/current", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.JWT
          }
        })
          .then(e => e.json())
          .then(data => {
              console.log("my clubs data::" + data.book_clubs)
              this.setState({
                  myclubs: data.book_clubs
              })
          })
          .catch(error => console.error("Error:", error));
        

        fetch("https://book-it.herokuapp.com/api/v1/book_clubs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.JWT
          }
        })
          .then(e => e.json())
          .then(data => {
              console.log("all clubs data::" + data.book_clubs)
              this.setState({
                  clubs: data.book_clubs
              })
          })
          .catch(error => console.error("Error:", error));

        }


          render()  {

              return(
                <div>
                    <h2>My Book Clubs:</h2>
                    <hr/>

                    {this.state.myclubs.map((club,i) =>(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={club.image_url} />
                        <Card.Body>
                          <Card.Title>{club.name}</Card.Title>
                          <Card.Text>
                            {club.description}
                          </Card.Text>
                          <Button variant="primary">Go To Club Page</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                                Genre: {club.genre}
                        </Card.Footer>
                      </Card>
                    ))}

                    <hr />
                    <h2>Browse Other Clubs:</h2>
                    <hr/>
                    <CardGroup>
                    {this.state.clubs.map((club,i) =>(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={club.image_url} />
                        <Card.Body>
                          <Card.Title>{club.name}</Card.Title>
                          <Card.Text>
                            {club.description}
                          </Card.Text>
                          <Button variant="primary">Go To Club Page</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                                Genre: {club.genre}
                        </Card.Footer>
                      </Card>
                    ))}
                    </ CardGroup>
                </div>
              )
                    }
                }
          
