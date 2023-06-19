import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';


const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(()=>{
        fetch('AppointmentOption.json')
       .then(res=> res.json())
       .then(data => setAppointmentOptions(data))
    },[])

    return (
        <div>
            <p className='text-center text-success text-lg font-semibold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='gap-6 my-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions?.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        // setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;

