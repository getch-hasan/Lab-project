import React from 'react';

const Footer = () => {
    return (
        <div className=''>
             <div className='bg-neutral ' >
            <footer className="footer p-10  text-neutral-content">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">product</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>

                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">Press kit</a>

                </div>
            </footer>
            <footer className="footer footer-center p-4  text-base-content">
                <div className='mb-5'>
                    <p>Copyright © 2023 - All right reserved </p>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;