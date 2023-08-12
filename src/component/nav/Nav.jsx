import { React, useState } from 'react'
import './nav.css'
import { HiHome } from 'react-icons/hi'
import { FcAbout } from 'react-icons/fc'
import { FaAward } from 'react-icons/fa'
import { FaSuitcase } from 'react-icons/fa'
import { MdAddCall } from 'react-icons/md'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" className={activeNav == '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><HiHome /></a>
            <a href="#about" className={activeNav == '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><FcAbout /></a>
            <a href="#experience" className={activeNav == '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><FaAward /></a>
            <a href="#services" className={activeNav == '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><FaSuitcase /></a>
            <a href="#contact" className={activeNav == '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><MdAddCall /></a>
        </nav>
    );
}

export default Nav