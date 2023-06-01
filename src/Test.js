import React from 'react';

const Test = (props) => {
    const {name}=props.product
    return (
        <div>
            <p>name:{name}</p>
        </div>
    );
};

export default Test;