import React from "react";
import { getBookClub } from "../../services/webService";
import { Card, Button, ListGroup } from "react-bootstrap";
const BookClubs = props => {
  let data = {
    status: 200,
    book_club: {
      id: 21,
      name: "clubseed",
      description: null,
      genre: null,
      created_at: "2019-09-05T16:04:44.727Z",
      updated_at: "2019-09-05T16:04:44.727Z",
      address: {
        city: "Toronto",
        address_line1: "123",
        address_line2: "Front St W"
      },
      image_url: null
    },
    image:
      "https://www.librarieshawaii.org/wp-content/uploads/2016/09/Book-club-graphic-resized-for-website.jpg",
    users: [
      {
        id: 39,
        name: "seed2",
        email: "seed2@yahoo.com",
        password_digest:
          "$2a$12$WO.hphs0Pi8rFybLvR7hhe7I7t1nLWnpP8a5K6CNQCjF3eq.c3mei",
        created_at: "2019-09-05T16:04:44.680Z",
        updated_at: "2019-09-05T16:04:44.680Z",
        address: {
          city: "Toronto",
          address_line1: "301",
          address_line2: "Front St W"
        }
      },
      {
        id: 38,
        name: "seed",
        email: "seed@yahoo.com",
        password_digest:
          "$2a$12$GjjSSd.78s5lXK85R1QYEukjZ.pmUN4cRSs8bL8EHTDUAXq8I20km",
        created_at: "2019-09-05T16:04:44.289Z",
        updated_at: "2019-09-05T16:04:44.289Z",
        address: {
          city: "Toronto",
          address_line1: "301",
          address_line2: "Front St W"
        }
      }
    ],
    admins: [
      {
        id: 38,
        name: "seed",
        email: "seed@yahoo.com",
        password_digest:
          "$2a$12$GjjSSd.78s5lXK85R1QYEukjZ.pmUN4cRSs8bL8EHTDUAXq8I20km",
        created_at: "2019-09-05T16:04:44.289Z",
        updated_at: "2019-09-05T16:04:44.289Z",
        address: {
          city: "Toronto",
          address_line1: "301",
          address_line2: "Front St W"
        }
      }
    ]
  };
    getBookClub(21).then(e=>e.json()).then(e=>{
     console.log(e);

     data = e
   });

  console.log("CLUB::", props);

  // let users = null;
  // if (data.users.length > 0) {
  //   users = data.users.map((e, i) => <li key={i}>{e.name}</li>);
  // }

  return (
    <Card className="text-center">
      <Card.Header>Welcome to</Card.Header>
      <Card.Body>
        <Card.Title>{data.book_club.name}</Card.Title>
        <Card.Text>
          {data.book_club.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis feugiat "}
        </Card.Text>

        <div>
          <div style={{ float: "left" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{data.userlist}</ListGroup.Item>
            
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
        {`${data.book_club.address.address_line1} ${data.book_club.address.address_line2} ${data.book_club.address.city} `}
      </Card.Footer>
    </Card>
  );
};

export default BookClubs;


// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, FormLabel, Col, Row, Form, } from "react-bootstrap";
// import "./BookClub.css"

// export default class BookClub extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           name: '',
//           description: "",
//           genre: "",
//             address_line1: '',
//             city: '',
//             province: '',
//             postal_code: '',
//             country: '',
//             // gravatar: '',
//             edit: false
//         };
//       }


//       componentDidMount() {
//         console.log('componectDidMount')
//         // fetch the current user for My Account
//         fetch('http://book-it.herokuapp.com/api/v1/bookclub/{:id}', {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer '+ sessionStorage.JWT
//             }
//         })
//             .then(e => e.json())
//             .then(json => {
//                 let bookclub = json.bookclub;
//                 this.setState({
//                     name: bookclub.name,
//                     description: bookclub.description,
//                       address_line1: bookclub.address.address_line1,
//                       city: bookclub.city,
//                       province: bookclub.address.province,
//                       postal_code: bookclub.address.postal_code,
//                       country: bookclub.address.country,
//                       // gravatar: json.gravatar
//                 })
//                 console.log(this.state)
//             })
//             .catch(error=>console.error('Error:', error));
//     }

//     edit() {
//         console.log('hi');
//         this.setState({
//             edit: true
//         });
//         this.props.history.push(`/BookClub`);

//     }
     

//     render()  {return (
//       <div className="BookClub">
//           <h1>Welcom to Book Club</h1>

//         {/* <Image src={this.state.gravatar} alt="" rounded /> */}

//         <Form>
//         <FormGroup as={Row} controlId="name">
//             <FormLabel column sm="4">Name</FormLabel>
//             <Col sm="8">
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.name}
//                 />)
//             }
//             </Col>
//           </FormGroup>

//           <FormGroup as={Row} controlId="description" >
//             <FormLabel column sm="4">Description</FormLabel>
//             <Col sm="8">
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.description}
//                 />)
//             }
//             </Col>
//           </FormGroup>

//           <FormGroup controlId="genre">
//             <FormLabel>Genre</FormLabel>
//             <FormControl
//               value={this.state.description}
//               onChange={this.handleChange}
//               type="text"
//             />
//           </FormGroup>

//           <FormGroup as={Row} controlId="address_line1" >
//             <FormLabel column sm="4">Address</FormLabel>
//             <Col sm="8">
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.address_line1}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.address_line1}
//                 />)
//             }
//             </Col>
//           </FormGroup>

//       <Form.Row>
//           <Form.Group controlId="city" as={Col}>
//             <Form.Label>City</Form.Label>
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.city}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.city}
//                 />)
//             }
//           </Form.Group>

//           <Form.Group controlId="province" as={Col}>
//             <Form.Label>Province</Form.Label>
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.province}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.province}
//                 />)
//             }
//           </Form.Group>


//           <Form.Group controlId="country" as={Col}>
//             <Form.Label>Country</Form.Label>
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.country}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.country}
//                 />)
//             }
//           </Form.Group>
//       </Form.Row>

//           <FormGroup controlId="postal_code" >
//             <FormLabel>Postal Code</FormLabel>
//             {this.state.edit ? 
//                 (<Form.Control
//                     autoFocus
//                     type="text"
//                     value={this.state.postal_code}
//                     onChange={this.handleChange}
//                     />)
//                 :
//                     (<Form.Control
//                     readOnly
//                     autoFocus
//                     plaintext
//                     type="text"
//                     value={this.state.postal_code}
//                 />)
//             }
//           </FormGroup>


          

//         {
//             this.state.edit ?
//             <Button
//                 block
//                 className = "button is-link"
//                 disabled={!this.validateForm()}
//                 type="submit"
//                 onClick={e=>this.edit()}
//             >
//                 Save Changes
//           </Button> 
//             :
//             <Button
//             block
//             className = "button is-link"
//             onClick={e=>this.edit()}
//           >
//             Edit
//           </Button> 
//         }

//         </Form>

//       </div>
//     );
//     }
// }
