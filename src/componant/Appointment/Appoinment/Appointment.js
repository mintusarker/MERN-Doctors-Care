import React, { useState } from 'react';

import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import AppointmentBanner from '../Appoinment/AppointmentBanner';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
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