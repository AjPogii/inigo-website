import React from 'react'
import './Facilities.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Facilities = () => {


    const facilities = [
        {
            id: 1,
            name: "Single Room",
            description: "Indulge in comfort and tranquility in our cozy Single Room, designed to provide the perfect retreat for solo travelers. This inviting space features a plush single bed, ensuring a restful night's sleep. The room is equipped with modern amenities, including a flat-screen TV, complimentary Wi-Fi, and a stylishly appointed bathroom with a refreshing shower.",
            type: "collage",
            images: ['api/placeholder/400/180', 'api/placeholder/400/180', 'api/placeholder/400/180'],
            position: "left"
        },

        {
            id: 2,
            name: "Double Room",
            description: "Experience comfort and elegance in our Double Room, designed to accommodate two guests with style and sophistication. This spacious room features a luxurious queen or king-size bed, perfect for couples or friends traveling together. The room is equipped with modern amenities, including a flat-screen TV, complimentary Wi-Fi, and an en-suite bathroom with a refreshing shower or bath.",
            type: "collage",
            images: ['api/placeholder/400/180', 'api/placeholder/400/180', 'api/placeholder/400/180'],
            position: "right"
        },
        {
            id: 3,
            name: "Function Hall",
            description: "Whether you're planning a grand celebration, a corporate event, or an intimate gathering, these function halls offer a range of features and capacities to suit your needs. From luxurious ballrooms to versatile meeting spaces, here are some outstanding options for hosting your next event.",
            type: "collage",
            images: ['api/placeholder/400/180', 'api/placeholder/400/180', 'api/placeholder/400/180'],
            position: "left"
        },

        {
            id: 4,
            name: "Cafe",
            description: "Indulge in a delightful dining experience at our cozy café, where you can enjoy a variety of international and local flavors in a warm and inviting atmosphere. Our café is designed to provide a comfortable space for guests to relax and socialize while savoring a selection of teas, coffees, and delicious pastries.",
            type: "slider",
            slides: ['api/placeholder/400/180', 'api/placeholder/400/180', 'api/placeholder/400/180'],
            position: "center"
        },

    ];

    const FacilityCard = (facility) => {
        return (
            <div className={`facility-card ${facility.position}-card`} key={facility.id}>
                <div className={`card-content ${facility.position === 'right' ? 'reverse' : ''}`}>

                    {facility.position !== 'right' && (
                        <div className="image-collage">
                            <div className="large-image-container">
                                <img src={facility.images[0]} alt={`${facility.name} Main View`} />
                            </div>
                            <div className="content-side">
                                <div className="small-images">
                                    <img src={facility.images[1]} alt={`${facility.name} Detail 1`} />
                                    <img src={facility.images[2]} alt={`${facility.name} Detail 2`} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-content">
                        <div className="card-header">
                            <h2>{facility.name}</h2>
                        </div>
                        <div className="card-description">
                            <p>{facility.description}</p>
                        </div>
                    </div>

                    {facility.position === 'right' && (
                        <div className="image-collage">
                            <div className="large-image-container">
                                <img src={facility.images[0]} alt={`${facility.name} Main View`} />
                            </div>
                            <div className="content-side">
                                <div className="small-images">
                                    <img src={facility.images[1]} alt={`${facility.name} Detail 1`} />
                                    <img src={facility.images[2]} alt={`${facility.name} Detail 2`} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    };

    const SliderCard = (facility) => {
        return (
            <div className="facility-card  cafe-card" key={facility.id}>
                <div className="slider-container">
                    <div className="card-content-container">
                        <div className="static-content">
                            <div className="card-header">
                                <h2>{facility.name}</h2>
                            </div>
                            <div className="card-description">
                                <p>{facility.description}</p>
                            </div>
                        </div>
                    </div>


                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        className="cafe-slider"
                    >
                        {facility.slides && facility.slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slider-image-container">
                                    <img src={slide} alt={`${facility.name} Slide ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )
    }


    return (
        <div className="facilities-page">
            <div className="facilities-hero">
                <div className="hero-overlay">
                    <div className="facilities-container section">
                        <h2>Our Facilities</h2>
                        <p>At our hotel, we strive to provide a comprehensive and comfortable experience for all our guests.
                            Our facilities are designed to cater to your every need, whether you're here for business, leisure,
                            or a combination of both. From relaxing spaces to productive areas,
                            we ensure that you have everything you need to make your stay with us truly unforgettable.</p>
                    </div>
                </div>
            </div>

            <div className="facilities-content">
                {facilities.map((facility) =>
                    facility.type === 'collage'
                        ? FacilityCard(facility)
                        : SliderCard(facility)
                )}
            </div>

        </div >
    )

}


export default Facilities
