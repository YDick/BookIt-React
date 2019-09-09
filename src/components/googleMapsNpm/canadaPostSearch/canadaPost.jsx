import React from 'react'

function CanadaPost (props){
    
    var fields = [   
        { element: "search", field: "", mode: pca.fieldMode.SEARCH }],  
        options = {   
            key: "TT23-AX96-JM63-MZ18"  
        },  
        control = new pca.Address(fields, options); 
        
    return(
        <div>
            

<div class="input-line">  
    <label for="search">Address</label>  
    <input id="search" type="text" placeholder="Street address" autofocus /> 
</div> 
        </div>
    )
}

export default CanadaPost