import React from 'react'
import './testimonials.css'
// import swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// for the avatar images of the clients
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import avtr4 from '../../assets/avatar4.jpg'

const data = [
    {
        id: 1,
        image: avtr1,
        title: "avatar-1",
        clientName: "Ernest Caregiver",
    },
    {
        id: 2,
        image: avtr2,
        title: "avatar-2",
        clientName: "Kind Caregiver",
    },
    {
        id: 3,
        image: avtr3,
        title: "avatar-3",
        clientName: "Aggresive Caregiver",
    },
    {
        id: 4,
        image: avtr4,
        title: "avatar-4",
        clientName: "Smothering Caregiver",
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                    data.map((clients) => {
                        return (
                            <SwiperSlide className='testimonial' key={clients.id}>
                                <div className="client__avatar">
                                    <img src={clients.image} alt={clients.title} />
                                </div>
                                <h5 className="client__name">{clients.clientName}</h5>
                                <small className="client__review">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur laboriosam autem iste expedita neque magnam alias magni sunt, harum aliquam eveniet, iure odit temporibus voluptas, illum ipsum obcaecati quam.
                                </small>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials