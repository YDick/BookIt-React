import React, { Component } from "react";

import UserInfo from './UserInfo';
import UpdateUser from './UpdateUser';

export default class MyAccountHOC extends Component  {
   
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    edit = () => {
        console.log('you may edit');
        if(this.state.edit)  {
            this.setState({
                edit: false
            })
        } else {
            this.setState({
                edit: true
            })
        }

    }
    
    render()  {
        if(!sessionStorage.JWT){
            return(null)
        }else if(this.state.edit) {
            return(
                < UpdateUser edit={this.edit} />
            )
        }else  {
            return(
                < UserInfo edit= {this.edit} />
            )
        }
    }
}