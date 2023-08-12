import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

// the images are copyright, not for production use
const data = [
    {
        id: 1,
        image: img1,
        title: "project-name-01",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 2,
        image: img2,
        title: "project-name-02",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 3,
        image: img3,
        title: "project-name-03",
        github: "https://github.com",
        demo: "https://google.com"
    },

    {
        id: 4,
        image: img4,
        title: "project-name-04",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 5,
        image: img5,
        title: "project-name-05",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 6,
        image: img6,
        title: "project-name-06",
        github: "https://github.com",
        demo: "https://google.com"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map((project) => {
                        return (
                            <article key={project.id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <h3>This is a portfolio title</h3>
                                <div className="portfolio__item-cta">
                                    <a href={project.github} className='btn' target='_blank'>Github</a>
                                    <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio