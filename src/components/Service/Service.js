import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Service = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("Fakedata.JSON")
      .then(res=>res.json())
      .then(data=>setCourses(data));
    },[])
    return (
<div className="container">
    <h1 className="fw-bold text-danger m-5 p-5">Our Exclusive Courses!!!</h1>
   <div className="">
           <Row xs={1} lg={1}>
               {
           courses.map(course =><Course
               course={course}
               ></Course>)
           }
     </Row>
      
   </div>
</div>
    );
};

export default Service;