import React from 'react';

const AppointmentOption = ({ appointmentOption , setTreatment, showModalHandle}) => {
    const { name, slots, price, _id } = appointmentOption;
    // console.log(slots[0]);
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-success font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        // htmlFor="booking-modal"
                        // onClick={() => window.booking_modal.showModal(_id)}
                        onClick={() => showModalHandle(_id)}
                        className="btn btn-success text-white">
                        Take Appointment</label>
                    {/* <button className="btn" onClick={() => window.booking_modal.showModal()}>open modal</button> */}

                </div>
            </div>
            
        </div>
    );
};

export default AppointmentOption;