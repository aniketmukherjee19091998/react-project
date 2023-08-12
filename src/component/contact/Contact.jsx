import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { BiLogoGmail, BiPaperPlane } from 'react-icons/bi'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'


const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_dmxdoer', 'template_igswnwy', form.current, 'q5OgE3ppyvyd_PK3f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BiLogoGmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>aniket13.am@gmail.com</h5>
                        <a href="mailto:aniket13.am@gmail.com" target='_blank'>Send</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className='contact__option-icon' />
                        <h4>FaceBook</h4>
                        <h5>Aniket Mukherjee</h5>
                        <a href="https://m.me/aniket.mukherjee" target='_blank'>Send</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+911234567890</h5>
                        <a href="https://wa.me/+919051137755" target='_blank'>Send</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='your full name' required />
                    <input type="email" name="email" placeholder='your email' required />
                    <textarea name="message" rows="7" placeholder='your message' required></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact