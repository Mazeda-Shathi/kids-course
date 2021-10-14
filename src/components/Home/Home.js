import React, { useEffect, useState } from 'react';
import { Image, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import img from '../kids.jpg'
const Home = () => {
    const [course,setCourse]=useState([]);
    useEffect(()=>{
        fetch('HomepageData.JSON')
        .then(res=>res.json())
        .then(data=>setCourse(data));
    },[]);
    return (
        <div className="w-100 mx-auto container">
           <Image src={img} />
           <h1 className="fw-bold" >Welcome to <small className="text-danger fw-bold">Kids Learning Home</small></h1>
           <h3 className="m-4 p-4">Our courses have been specifically designed around the unique way children learn and are taught by experienced teachers.</h3>
           <Row lg={1}>
               {
           course.map(course =><Course
               course={course}
               ></Course>)
           }
     </Row>
        </div>
        
    );
};

export default Home;