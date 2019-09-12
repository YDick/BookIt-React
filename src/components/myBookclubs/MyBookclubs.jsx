/* eslint-disable eqeqeq */
import React, { Component } from "react";
import {Card, CardGroup, Button, CardDeck, CardColumns} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
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
                var clubs = data.book_clubs.filter((club) => {
                let a = true
                this.state.myclubs.forEach((item) => {
                  console.log("club.id and item.id"+club.id+item.id)
                  if(club.id == item.id){
                    a = false
                  }
                } 
              )
              return(a)
            }
      )
      console.log("filtereddd:::"+ JSON.stringify(clubs))
              this.setState({
                  clubs: clubs
              })
          })
          .catch(error => console.error("Error:", error));
        }



          render()  {
              return(
                <div>
                    <h2>My Book Clubs:</h2>
                    <hr/>
                    {
                      sessionStorage.JWT ?
                      <CardDeck>
                      {this.state.myclubs.map((club,i) =>(
                          <Card style={{ width: '18rem' }} key={i}>
                          <Card.Img variant="top" src={club.image_url} />
                          <Card.Body>
                            <Card.Title>{club.name}</Card.Title>
                            <Card.Text>
                              {club.description}
                            </Card.Text>
                            <LinkContainer to={"/bookclubs/"+club.id}>
                              <Button  class="button" variant="primary">Go To Club Page</Button>
                            </LinkContainer>
  
                          </Card.Body>
                          <Card.Footer className="text-muted">
                                  Genre: {club.genre}
                          </Card.Footer>
                        </Card>
                      ))}
                      </CardDeck>
                      :
                      <p>Sign in to see your clubs!</p>
                    }
                   

                    

                    <hr />
                    <h2>Browse Other Clubs:</h2>
                    <hr/>
                    <CardColumns>
                    {this.state.clubs.map((club,i) =>(
                        <Card style={{ width: '18rem' }} key={i+30}>
                        <Card.Img variant="top" src={club.image_url} />
                        <Card.Body>
                          <Card.Title>{club.name}</Card.Title>
                          <Card.Text>
                            {club.description}
                          </Card.Text>
                          <LinkContainer to={"/bookclubs/"+club.id}>
                          <Button variant="primary">Go To Club Page</Button>
                          </LinkContainer>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                                Genre: {club.genre}
                        </Card.Footer>
                      </Card>
                    ))}
                    </CardColumns>
                </div>
              )
                    }
                }
          
