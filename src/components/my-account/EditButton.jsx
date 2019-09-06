import React from "react";
import {Button} from 'react-bootstrap';

function EditButton(props) {

        if(props.edit){
            return(
                <Button
                block
                className = "button is-link"
                type="submit"
                disabled= {false}
                onClick={e=>props.handleSubmit()}
            >
                Save Changes
          </Button> 
            )

        } else { 
            return(
                <Button
                block
                className = "button is-link"
                onClick={e=>props.edit()}
              >
                Edit
              </Button>
            )
 
        }
}

export default EditButton;