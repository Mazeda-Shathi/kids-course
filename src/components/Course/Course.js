import Button from '@restart/ui/esm/Button';
import React from 'react';

const Course = (props) => {
    const{img,code,course,fee,about}=props.course;
    const img_style={
        width:"50%",
        height:"500px",
       borderRadius:"30px",
       boxShadow: " 10px",

    }
    return (
        <div className="d-flex p-2 bd-highlight">
             <img className="m-5 w-50" style={img_style} src={img}></img>
           <div className="m-5 p-5">
           <h1 className="text-danger shadow fw-bold m-3 p-3">{course}</h1>
           <h3>Course_code:{code}</h3>
           <h3>Fee:{fee}$</h3>
           <h5>{about}</h5>
           <Button className="btn btn-danger fw-bold m-2 shadow">Enroll Now</Button>
           </div>
        </div>
    );
};

export default Course;