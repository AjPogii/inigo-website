import React, { useState } from 'react'
import './GallerySection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/swiper-bundle.css';



const hotelImages = [
    { id: 1, src: '../../../assets/images/hotel1.jpg' },
    { id: 2, src: '../../../assets/images/hotel2.jpg' },
    { id: 3, src: '../../../assets/images/hotel3.jpg' },
    { id: 4, src: '../../../assets/images/hotel4.jpg' },
    { id: 5, src: '../../../assets/images/hotel5.jpg' },
    { id: 6, src: '../../../assets/images/hotel6.jpg' },
    { id: 7, src: '../../../assets/images/hotel7.jpg' },
    { id: 8, src: '../../../assets/images/hotel8.jpg' },
];


const GallerySection = () => {

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">Our Gallery</h2>

            <div className="gallery-slider-container">
                <button className="slider-arrow prev-button">
                    <ChevronLeft size={24} />
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        576: { slidesPerView: 1 },
                    }}
                    navigation={{
                        nextEl: '.next-button',
                        prevEl: '.prev-button',
                    }}
                    pagination={{ clickable: true, el: '.slider-dots' }}
                    className="gallery-slider">

                    {hotelImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-item">
                                <img src={image.src} alt={`Hotel view ${index + 1}`} className="gallery-image" />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="slider-arrow next-button">
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="slider-dots"></div>

        </div>
    )
}

export default GallerySection
