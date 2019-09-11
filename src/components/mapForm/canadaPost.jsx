import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

// function canadaPost(props) {
//   console.log(props.formOptions.Items, "form option props props:::::::::");
//   props.formOptions.Items !== undefined &&
//   props.formOptions.Items[0] !== undefined &&
//   props.formOptions.Items[0].Text !== undefined && 
//   console.log("went throug log!!!")
//   return (
//     <div>
//       <Form.Control
//         size="lg"
//         type="text"
//         placeholder="Large text"
//         value={props.value}
//         onChange={event => {
//           props.cpDataChange(event.target.value);
//         }}
//       />
//  {props.formOptions.Items !== undefined &&
//         props.formOptions.Items[0] !== undefined &&
//         props.formOptions.Items[0].Text !== undefined && 
//         console.log("YayaYayaYayaYayaYayaYayaYayaYayaYayaYaya", props.formOptions.Items[0].Text) &&
//         <h1> hey </h1> &&
//         <Form>
//           <Form.Group>
//           <Form.Control as="select" multiple>
//             {props.formOptions.Items.map((location, i) => (
//               <option
//                 onClick={e => {
//                   props.formClick(e.target.value);
//                 }}
//               >
//                 `${location.Text} ${location.Description}`
//               </option>
//             ))}
//           </Form.Control>
//           </Form.Group>
//           </Form>
//         } 

// {/* // { typeof(props.formOptions.Items) !== 'undefined' &&
// // typeof(props.formOptions.Items[0]) !== 'undefined'   &&
// // typeof(props.formOptions.Items[0].Text) !== 'undefined'  && 
// // console.log("YayaYayaYayaYayaYayaYayaYayaYayaYayaYaya") &&
// //         <Form>
// //           <Form.Group>
// //           <Form.Control as="select" multiple>
// //             {props.formOptions.Items.map((location, i) => (
// //               <option
// //                 onClick={e => {
// //                   props.formClick(e.target.value);
// //                 }}
// //               >
// //                 `${location.Text} ${location.Description}`
// //               </option>
// //             ))}
// //           </Form.Control>
// //           </Form.Group>
// //           </Form>
// //         } */}

//       {console.log("props in return::::::", props.formOptions)}

//       <Button
//         value="Submit"
//         onClick={e => {
//           e.preventDefault();

//           props.submitCP();
//         }}
//       >
//         Submit
//       </Button>
//     </div>
//   );
// }

// export default canadaPost;

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
<div>
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
