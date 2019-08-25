import React from "react";
import {Link} from 'react-router-dom';
import Logout from "../logout/Logout";

const AccountStuff= (props) => {
    let account = <React.Fragment>
                    <Link className="link" to="/login">Login</Link> | 
                    <Link className="link" to="/signup"> Sign Up</Link>
                  </React.Fragment>;

    if(sessionStorage.JWT){
        account = <React.Fragment>
                    <Logout/> | 
                    <Link className="link" to="/"> My Account</Link>
                  </React.Fragment>;
    }


    return(
      account
    )
}

export default AccountStuff;