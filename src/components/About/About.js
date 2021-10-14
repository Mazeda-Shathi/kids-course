import React from 'react';
import { Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="m-3">
            <h1 className="text-danger m-5 p-2">ABOUT  US</h1>
           <h5>Established in 2018, kids learning home offers a range of career-focused programs for kids.</h5>
            <h5 className="">Our programs are designed to meet the needs of the market, ensuring our students receive the most current education possible.
            </h5>
            <h5>We offer a lineup of micro-credentials focused on technology that help students gain valuable and specific skills in a short amount of time.</h5>
            <h5>It is a dynamic and growing institution defined by its close connections to the business community and a commitment to outstanding student services.</h5>
           <div>
               <h1 className="text-danger mt-5">Kids Learning Home At a Glance</h1>
               < div className="mx-auto container">
                  <div className="text-center fw-bold m-4 thumbnail  p-3 bg-secondary rounded-2 text-light w-25 mx-auto">
                      <h5>3000+ student </h5>
                      <h5>25 average class </h5>
                      <h5>From 20+ courses</h5>                 
                  </div>
                  
               </div>
           </div>
            </div>
    )
};

export default About;