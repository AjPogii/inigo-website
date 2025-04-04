import React from 'react'

const Facilities = () => {

    const facilitiesData = [
        {
            id: 1,
            name: 'Single Room',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
            icon: '',
        },

        {
            id: 2,
            name: 'Double Room',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
            icon: '',
        },
        {
            id: 3,
            name: 'Function Hall',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
            icon: '',
        },
    ];

    return (
        <div className="facilities-container section">
            <div className="facilities-title">
                <h1 className="section_title">Facilities</h1>
                <p className="description">
                    Discover a world of comfort and convenience with our exceptional facilities and services, designed to enhance your stay.
                </p>
            </div>

            <div className="facilities-cards">
                {facilitiesData.map((facility) => (

                    <div className="facility-card" key={facility.id}>
                        <div className="facility-icon">{facility.icon}</div>

                        <div className="facility-content">
                            <h3 className="facility-name">{facility.name}</h3>
                            <p className="facility-description">{facility.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view-all-container">
                <button className="view-all-button"> View all</button>
            </div>
        </div>

    )
}

export default Facilities
