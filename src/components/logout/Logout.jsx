import React, { Component } from "react";

function Logout(){
    
    return(
        <div onClick={e=>sessionStorage.clear()}>
            logout
        </div>
    )
}

export default Logout;