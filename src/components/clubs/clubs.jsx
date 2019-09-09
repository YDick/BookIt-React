import React from "react";

class Clubs extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

       // this is a good place to fetch() bc only uses once. Mounts into virtual DOM. v important
       componentDidMount() {
        console.log('componectDidMount')
        // fetch.......then(this.setState)

    }

    render(){return(
        <div>

        </div>
    )};
}

export default Clubs;