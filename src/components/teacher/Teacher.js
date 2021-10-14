import React from 'react';

const Teacher = (props) => {
    const {img,name,Age,works}=props.teacher;
    const img_style={
        width:"300px",
        height:"300px",
       borderRadius:"50%",
       boxShadow: " 10px",

    }
    return (
        <div className="p-2 m-2 shadow bd-highlight text-center">
             <img className="mb-2" style={img_style} src={img}></img>
           <h3>{name}</h3>
           <h3>Age:{Age}</h3>
           <h5>Works at:{works}</h5>
        </div>
    );
};

export default Teacher;