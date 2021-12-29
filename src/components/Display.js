import React from 'react';
import './styles.css'

const Display = ({carDetails}) => {
    return (
        <div className='main'>
            {carDetails.map((car) => (
                <div key={car.id} style={{ backgroundColor: 'white', border: ' 2px', marginTop: '8px', paddingTop: '5px' }}>
                    <img className='left' src={car.image} alt="img here" height="48%" width="30%" />
                    <span className='second'>Rs.&nbsp;{car.price}</span>
                    <br />
                    <div style={{ marginRight: '40%', paddingTop: "5%" }}>
                        <h6>{car.location}</h6>
                        <h3 >{car.name}</h3>
                        <h5>{car.transmission}, &nbsp;
                            {car.DeliveryType},&nbsp;
                            {car.seats} Seats
                        </h5>
                    </div>
                    <br />
                    < button className='book' >BOOK NOW</button>
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default Display;