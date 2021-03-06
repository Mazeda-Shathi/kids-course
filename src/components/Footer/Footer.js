import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-light d-flex">
             <div className="mx-auto m-3 p-3">
             <h4 className="fw-bold">Contact us</h4>
             <h6>Phone:+0903255</h6>
             <h6>Email:kidslearninghome@gmail.com</h6>
             <a  href="*" className="m-3"><i class="fab fa-facebook"></i></a>
             <a href="*" className="m-3"><i class="fab fa-instagram"></i></a>
             <a href="*" className="m-3 "><i class="fab fa-whatsapp-square"></i></a>
            </div>
            <div className="mx-auto m-3 p-3">
             <h4 className="fw-bold">Company </h4>
             <h6>Privacy policy</h6>
             <h6>Terms of Use</h6>
             <h6>Refund policy</h6>
            </div>
            <div className="mx-auto m-3 p-3">
             <h4 className="fw-bold">Popular course </h4>
             <h6>Dance</h6>
             <h6>Learn Quran</h6>
             <h6>Spoken English</h6>
             
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;