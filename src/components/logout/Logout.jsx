import React from "react";
import {Link} from 'react-router-dom'

function Logout(props){

   let logout = () => {
        sessionStorage.clear();
        props.logOut();

    }
    
    return(
        <Link onClick={e=>logout()} to="/">
            Logout
        </Link>
    )
}

export default Logout;