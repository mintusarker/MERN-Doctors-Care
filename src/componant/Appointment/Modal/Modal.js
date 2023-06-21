import React from 'react';
import { format } from 'date-fns';

const Modal = ({ appointmentOptions, activeId, setShowModal, selectedDate }) => {

    const date = format(selectedDate, 'PP');
    const appointmentOption = appointmentOptions.find(opi => opi._id === activeId)
    const { name, price, slots, _id } = appointmentOption


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            // treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);
    }


    return (
        <div className='w-full h-full fixed top-0 left-0 z-20'>
            <div className='max-w-[600px] absolute top-1/2 left-1/2 z-30 bg-zinc-600 rounded-md transform -translate-x-1/2 -translate-y-1/2 p-3 lg:w-[450px] md:w-[450px] sm:w-[450px] w-[400px]'>
                <h3 className="text-3xl text-center font-bold text-white mt-3">{name}</h3>
                <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost bg-white hover:text-white text-xl absolute right-2 top-2">✕</button>
                <form onSubmit={handleBooking} className="p-8">

                    <input type="text" disabled value={date} className="input input-bordered w-full my-3" />
                    <select name="slot" className="select select-bordered w-full my-3">
                        {
                            slots?.map((slot, i) => <option
                                value={slot}
                                key={i}
                            >{slot}</option>)
                        }
                    </select>
                    <input name="name" type="text" placeholder="Your Name" disabled className="input input-bordered w-full my-3" />
                    <input name='email' type="email" placeholder="Email Address" disabled className="my-3 input input-bordered w-full" />
                    <input name='phone' autoFocus type="text" placeholder="Phone Number" className="input input-bordered w-full my-3" required />

                    <input type="submit" className='btn btn-accent w-full mt-3' value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Modal;