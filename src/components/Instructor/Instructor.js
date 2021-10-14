import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../teacher/Teacher';

const Instructor = () => {
    const [instructor,setInstructor]=useState([]);
    useEffect(()=>{
        fetch('Instructor.JSON')
        .then(res=>res.json())
        .then(data=>setInstructor(data));
    },[])
    return (
        <div className="w-100 mx-auto container">
        <h1 className="fw-bold text-danger m-5 p-3" >Our Honourable Instructor</h1>
        <Row lg={1}>
            {
       instructor.map(teacher =><Teacher
            teacher={teacher}
            ></Teacher>)
        }
  </Row>
     </div>
    );
};

export default Instructor;