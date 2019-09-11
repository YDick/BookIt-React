import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class canadaPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

componentWillReceiveProps(nextProps) {

  if(this.props.formOptions.Items !== undefined &&
    this.props.formOptions.Items[0] !== undefined &&
    this.props.formOptions.Items[0].Id !== undefined ) {
     console.log("new title is",this.props.formOptions.Items[0].Text );
     this.setState({
         data: this.props.formOptions.Items
     })
  }
}
render(){
  console.log("canada post state!!!",this.state.data)
  return(
<div style ={{position: 'relative', top: '35px', width: '63%',left:'245px' }}>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Large text"
        value={this.props.value}
        onChange={event => {
          this.props.cpDataChange(event.target.value);
        }}
      />
       {this.state.data != null &&
        <Form>
           <Form.Group>
           <Form.Control as="select" multiple>
             {this.state.data.map((location, i) => (
               <option key={i}
                 onClick={e => {
                   this.props.formClick(e.target.value);
                 }}
               >
                 {location.Text} {location.Description}
               </option>
             ))}
           </Form.Control>
           </Form.Group>
           </Form>} 

       

        {console.log("props in return::::::", this.props.formOptions)}

      <Button
        value="Submit"
        onClick={e => {
          e.preventDefault();

          this.props.submitCP();
        }}
      >
        Submit
      </Button>
    </div>

  )
}

}

export default canadaPost;
