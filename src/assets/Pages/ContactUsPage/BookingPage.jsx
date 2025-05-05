import React, { useEffect, useState } from 'react'
import './Booking.css';
import contactImg from '../../../assets/images/about-3.jpg';
import { FaFacebook, FaFacebookMessenger, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const BookingPage = () => {

    const ROOM_TYPES = [
        { id: 'standard', name: 'Standard Room', price: 2000, description: "Comfortable room with basic amenities" },
        { id: 'deluxe', name: 'Deluxe Room', price: 3000, description: "Spacious room with additional features" },
        { id: 'twin-deluxe', name: 'Twin Deluxe Room', price: 3500, description: "Two beds for extra comfort" },
        { id: 'executive', name: 'Executive Room', price: 4000, description: "Luxurious room with premium amenities" },
        { id: 'special-executive', name: 'Special Executive Room', price: 4500, description: "Exclusive room with special features" },
        { id: 'family', name: 'Family Room', price: 5000, description: "Spacious room for families" },
    ];

    const LOCATION_DATA = {
        email: ['sales.inigo2019@gmail.com', 'reservations@hotelinigo.ph'],
        phone: ['+63935-281-0508', '+63923-692-0148'],
        address: ['Rizal St.', 'Brgy.19 Cabangan', 'Legazpi City'],
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/hotelinigo' },
            { name: 'Messenger', url: 'https://www.facebook.com/hotelinigo' }
        ]
    };

    const SocialIcons = {
        Facebook: <FaFacebook size={24} />,
        Messenger: <FaFacebookMessenger size={24} />
    };

    const ContactIcons = {
        email: <MdEmail size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />,
        phone: <FaPhone size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />,
        address: <FaMapMarkedAlt size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        guests: 1,
        checkIn: '',
        checkOut: '',
        roomType: ROOM_TYPES[0].id,
        message: ''
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setBookingStatus] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [showCustomGuestInput, setShowCustomGuestInput] = useState(false);


    // Date handling
    const today = new Date().toISOString().split('T')[0];
    const [minCheckOutDate, setMinCheckOutDate] = useState(today);

    useEffect(() => {
        if (formData.checkIn) {
            const nextDay = new Date(formData.checkIn);
            nextDay.setDate(nextDay.getDate() + 1);
            setMinCheckOutDate(nextDay.toISOString().split('T')[0]);

            if (formData.checkOut && new Date(formData.checkOut) < nextDay) {
                setFormData(prev => ({ ...prev, checkOut: nextDay.toISOString().split('T')[0] }));
            }
        }
    }, [formData.checkIn]);

    // Calculations
    const calculateNights = () => {
        if (!formData.checkIn || !formData.checkOut) return 0;
        return Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / 86400000);
    };

    const totalPrice = calculateNights() * (ROOM_TYPES.find(r => r.id === formData.roomType)?.price || 0);
    const selectedRoom = ROOM_TYPES.find(r => r.id === formData.roomType)

    // Validation
    const validateForm = () => {
        const errors = {};
        const requiredFields = ['firstName', 'lastName', 'age', 'email', 'contactNo', 'checkIn', 'checkOut'];

        requiredFields.forEach(field => {
            if (!formData[field]?.trim?.()) {
                errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
            }
        });

        if (formData.age && parseInt(formData.age) < 18) {
            errors.age = 'Must be at least 18';
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email';
        }

        const guestCount = parseInt(showCustomGuestInput ? formData.customGuests :
            formData.guests, 10);
        if (isNaN(guestCount) || guestCount < 1) {
            errors.guests = 'Invalid guest count';
        }
        else if (guestCount > selectedRoom.capacity) {
            errors.guests = `Max ${selectedRoom.capacity} guests`;
        }

        return errors;
    };

    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (validationErrors[name]) {
            setValidationErrors(prev => ({ ...prev, [name]: null }));
        }
        if (name === 'guests') {
            setShowCustomGuestInput(value === 'other');
            if (value !== 'other') {
                setFormData(prev => ({ ...prev, customGuests: null }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors); return
        }

        setBookingStatus(true);
        const finalData = { ...formData, guests: showCustomGuestInput ? formData.customGuests : formData.guests };


        // Simulate async submission
        setTimeout(() => {
            console.log('Booking submitted:', finalData);
            setBookingStatus(false);
            setBookingSuccess(true);

            setTimeout(() => {
                setBookingSuccess(false);
                setFormData({
                    firstName: '', lastName: '', age: '', email: '', contactNo: '',
                    guests: '2', customGuests: '', checkIn: '', checkOut: '',
                    roomType: 'standard', message: ''
                });
                setShowCustomGuestInput(false);
            }, 3000);
        }, 1500);
    };

    return (
        <div className="booking-page">
            {/* Hero Section */}
            <div className="hero-section">
                <img src={contactImg} alt="contact-img" className="hero-img" />
                <div className="hero-content">
                    <h1>Book Now</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex</p>
                </div>
            </div>

            <div className="main-content-container">
                {/* Booking Form Container */}
                <div className="booking-container">
                    <div className="booking-form-container">
                        <h2>Book your Stay</h2>

                        {bookingSuccess ? (
                            <div className="success-message">
                                <h3>Booking Confirmed</h3>
                                <p>Thank you {formData.firstName}! your reservation is submitted</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid rerum praesentium ipsam accusamus!</p>
                            </div>
                        ) : (
                            <form className="booking-form" onSubmit={handleSubmit} noValidate>
                                <div className="form-row">
                                    {['firstName', 'lastName'].map((field) => (
                                        <div className="form-group" key={field}>
                                            <label htmlFor={field}>{field === 'firstName' ? 'First Name' : 'Last Name*'}</label>
                                            <input
                                                type="text"
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                placeholder={`Enter your ${field === 'firstName' ? 'first' : 'last'} name`}
                                                className={validationErrors[field] ? 'error' : ''}
                                                aria-invalid={!!validationErrors[field]}
                                                aria-describedby={validationErrors[field] ? `${field}-error` : undefined}
                                            />
                                            {validationErrors[field] && (
                                                <span className="error-message" id={`${field}-error`}>{validationErrors[field]}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Age */}
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Must be 18+"
                                        min={18}
                                        className={validationErrors.age ? 'error' : ''}
                                        aria-invalid={!!validationErrors.age}
                                        aria-describedby={validationErrors.age ? 'age-error' : undefined}
                                    />
                                    {validationErrors.age && (
                                        <span className="error-message" id="age-error">{validationErrors.age}</span>
                                    )}
                                </div>

                                {/* Email & Contact */}
                                <div className="form-row">
                                    {[
                                        { name: 'email', type: 'email', placeholder: 'Enter your email address' },
                                        { name: 'contactNo', type: 'tel', placeholder: 'Enter your contact number' }
                                    ].map(({ name, type, placeholder }) => (
                                        <div className="form-group" key={name}>
                                            <label htmlFor={name}>{name === 'email' ? 'Email' : 'Contact No.'}</label>
                                            <input
                                                type={type}
                                                id={name}
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                placeholder={placeholder}
                                                className={validationErrors[name] ? 'error' : ''}
                                                aria-invalid={!!validationErrors[name]}
                                                aria-describedby={validationErrors[name] ? `${name}-error` : undefined}
                                            />
                                            {validationErrors[name] && (
                                                <span className="error-message" id={`${name}-error`}>{validationErrors[name]}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="form-group guests-group">
                                    <label htmlFor="guests">Number of guests</label>
                                    <select name="guests" id="guests"
                                        value={formData.guests}
                                        onChange={handleChange} className={validationErrors.guests ? 'error' : ''}
                                        aria-invalid={validationErrors.guests ? 'error' : ''}
                                        aria-describedby={validationErrors.guests ? 'guests-error' : undefined}>

                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                            <option value={num} key={num}>{num}</option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                    {showCustomGuestInput && (
                                        <input type="number" name="customGuests" id="customGuests"
                                            value={formData.customGuests}
                                            onChange={handleChange}
                                            placeholder="Enter number of guests"
                                            min='1'
                                            className={validationErrors.guests ? 'error custom-guests' : 'custom-guests-input'}
                                            aria-invalid={validationErrors.guests ? 'true' : 'false'}
                                            aria-describedby={validationErrors.guests ? 'guests-error' : undefined} />
                                    )}
                                    {validationErrors.guests && (
                                        <span className="error-message" id="guests-error">
                                            {validationErrors.guests}
                                        </span>
                                    )}
                                </div>

                                <div className="form-row">
                                    {[
                                        {
                                            label: 'Check-in Date',
                                            name: 'checkIn',
                                            type: 'date',
                                            min: today,
                                            placeholder: 'Arrival date',
                                        },
                                        {
                                            label: 'Check-out Date',
                                            name: 'checkOut',
                                            type: 'date',
                                            min: minCheckOutDate,
                                            placeholder: 'Departure date',
                                        },
                                    ].map(({ label, name, type, min, placeholder }) => (
                                        <div className="form-group" key={name}>
                                            <label htmlFor={name}>{label}</label>
                                            <input type={type} id={name} name={name}
                                                value={formData[name]} onChange={handleChange} min={min}
                                                placeholder={placeholder} className={validationErrors[name] ? 'error' : ''}
                                                aria-invalid={validationErrors[name] ? 'true' : 'false'}
                                                aria-describedby={validationErrors[name] ? `${name}-error` : undefined} />

                                            {validationErrors[name] && (
                                                <span className="error-message" id={`${name}-error`}>
                                                    {validationErrors[name]}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="roomType">Room Type</label>
                                    <select name="roomType" id="roomType" value={formData.roomType}
                                        onChange={handleChange}>
                                        {ROOM_TYPES.map(({ id, name, price }) => (
                                            <option value={id} key={id}>
                                                {name}-₱{price} / night
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="room-description">
                                    <p>{selectedRoom?.description}</p>
                                </div>

                                <div className="pricing-section">
                                    <h3>Booking Summary</h3>
                                    <div className="price-details">
                                        <p>Room Type: {selectedRoom?.name}</p>
                                        <p>Price /night: ${selectedRoom?.price}</p>
                                        <p>No. of nights: {calculateNights()}</p>
                                        <p className="total-price">Total: ${totalPrice}</p>
                                    </div>
                                </div>

                                <div className="form-group full width">
                                    <label htmlFor="message">Special Requests</label>
                                    <textarea name="message" id="message"
                                        value={formData.message} onChange={handleChange} rows='4'
                                        placeholder="Additional requests" />
                                </div>

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Book Now'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="hotel-details-container">
                    <div className="hotel-details">
                        <div className="contact-info">
                            <h3>Contact Us</h3>
                            {['email', 'phone', 'address'].map(type => (
                                <div className="info-item" key={type} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 8 }}>
                                    <span style={{ marginRight: 8, marginTop: 2 }}>{ContactIcons[type]}</span>
                                    <div>
                                        {LOCATION_DATA[type].map((item, i) => (
                                            <p key={i} style={{ margin: 0 }}>
                                                {type === 'email' ? (
                                                    <a href={`mailto:${item}`} style={{ color: '#333' }}>{item}</a>
                                                ) : type === 'phone' ? (
                                                    <a href={`tel:${item.replace(/[^+\d]/g, '')}`} style={{ color: '#333' }}>{item}</a>
                                                ) : (
                                                    item
                                                )}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="social-media">
                                <div className="social-icons">
                                    {LOCATION_DATA.socialMedia.map(({ name, url }, index) => (
                                        <a href={url} key={index} className="social-icon"
                                            aria-label={`Follow us on ${name}`}
                                            target="blank" rel="noopener noreferrer"
                                            style={{ marginRight: 12, color: '#333', display: 'inline-block' }}>{SocialIcons[name]}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <h3>Our Location</h3>
                            <div className="map">
                                {/* Map content goes here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BookingPage
