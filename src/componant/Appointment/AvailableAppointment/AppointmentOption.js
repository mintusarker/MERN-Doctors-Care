import React from 'react';

const AppointmentOption = ({ appointmentOption}) => {
    const { name, slots, price } = appointmentOption;
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
                        htmlFor="booking-modal"
                        // onClick={() => setTreatment(appointmentOption)}
                        className="btn btn-success text-white">
                        Take Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;