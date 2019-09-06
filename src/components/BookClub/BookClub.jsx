import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
const Bookclubs = props => {
  console.log("CLUB::", props);

  let users = null;
  if (props.users.length > 0) {
    users = props.users.map((e, i) => <li key={i}>{e.name}</li>);
  }
  

  return (
    // <div className="item">
    //   <p>
    //     Title:: <span>{props.club_info.name}</span>
    //   </p>
    //   <p>
    //     About:: <span>{props.club_info.description}</span>
    //   </p>
    //   <p>
    //     Genre:: <span>{props.club_info.genre}</span>
    //   </p>

    //   {users !== null ? (
    //     <div>
    //       {" "}
    //       <h3>Members::</h3>
    //       <ul> {users} </ul>{" "}
    //     </div>
    //   ) : null}
    // </div>

    <Card className="text-center">
      <Card.Header>Welcome to</Card.Header>
      <Card.Body>
        <Card.Title>{props.club_info.name}</Card.Title>
        <Card.Text>
          {props.club_info.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis feugiat "}
        </Card.Text>

        <div>
          <div style={{ float: "left" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{props.userlist}</ListGroup.Item>
            
            </ListGroup>
          </div>
          <div style={{ float: "right" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{props.adminlist}</ListGroup.Item>
              
            </ListGroup>
          </div>
        </div>
      </Card.Body>

      <Button variant="primary">Go somewhere</Button>

      <Card.Footer className="text-muted">
        {`${props.club_info.address.address_line1} ${props.club_info.address.address_line2} ${props.club_info.address.city} `}
      </Card.Footer>
    </Card>
  );
};

export default BookClub;
