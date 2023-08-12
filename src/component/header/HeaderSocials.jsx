import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='blank'><SiLinkedin /></a>
            <a href="https://github.com" target='blank'><FaGithub /></a>
            <a href="https://drrrible.com" target='blank'><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials