import React from "react";
import {Link} from 'react-router-dom'

function Logout(){

   let logout = () => {
        sessionStorage.clear();

    }
    
    return(
        <Link onClick={e=>logout()}>
            Logout
        </Link>
    )
}

export default Logout;