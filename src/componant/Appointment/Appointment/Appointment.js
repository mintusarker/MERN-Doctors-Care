import React, { useState } from 'react';

import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className='lg:flex flex-row justify-center items-center my-7 pb-12'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;