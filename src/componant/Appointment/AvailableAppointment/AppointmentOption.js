import React from 'react';

const AppointmentOption = ({ appointmentOption, showModalHandle }) => {
    const { name, slots, price, _id } = appointmentOption;
    // console.log(slots[0]);
    return (
        <div className="shadow-xl shadow-slate-400">
            <div className="card-body text-center">
                <h2 className="text-2xl text-success font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small className='text-rose-700 text-sm font-semibold'>price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => showModalHandle(_id)}
                        className="btn bg-emerald-700 hover:bg-green-900 rounded-sm btn-sm text-white">
                        Take Appointment</label>

                </div>
            </div>

        </div>
    );
};

export default AppointmentOption;