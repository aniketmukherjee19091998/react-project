import React from 'react'
import './footer.css'
import { GrFacebook } from 'react-icons/gr'
import { CgTwitter } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ANIKET</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><GrFacebook /></a>
                <a href="https://twitter.com"><CgTwitter /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Aniket Mukherjee. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer