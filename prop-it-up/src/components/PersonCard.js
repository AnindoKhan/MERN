import React from 'react';

const PersonCard = props => {
    
    // const birthday = () =>{
    //     this.setState({age: this.state.age+1});
    // }

        const { firstName, lastName, age, hairColor } = props;
        return(
            <div>
                <h1>{ firstName },{ lastName }</h1>
                <h3> Age: { age }</h3>
                <h3> Hair Color: { hairColor }</h3>
                {/* <button onClick = {birthday }> Its your Birthday! </button> */}
            </div>
        )
    
}

export default PersonCard;
