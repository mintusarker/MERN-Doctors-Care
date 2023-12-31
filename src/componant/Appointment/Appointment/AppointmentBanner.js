import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import image from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div
            style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat'
            }}
            className='my-14 lg:mx-16'>
            <header className='flex flex-col lg:flex-row-reverse  justify-center items-center gap-8'>
                {/* <div className="lg:w-1/2 md:w-1/2 sm:w-4/5 w-4/5 mx-auto">
                    <img className='mx-auto w-[500px]' src={chair} alt="dentist chair" />
                </div> */}
                <div className="flex justify-center items-center h-64 w-1/2 mx-auto">
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    // footer={footer}
                    />
                </div>
            </header>
            <p className='text-center my-12'>You have selected date {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AppointmentBanner;