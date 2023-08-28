import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import Modal from '../Modal/Modal';
import { useQuery } from 'react-query';


const AvailableAppointment = ({ selectedDate }) => {
    const [showModal, setShowModal] = useState(false)
    const [activeId, setActiveId] = useState(null)
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://hello-doctors-server.vercel.app/appointmentOptions?date=${date}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <span className="loading loading-ring loading-lg text-green-800 mx-[450px]"></span>
    }

    const showModalHandle = (id) => {
        setShowModal(true)
        setActiveId(id)
    }

    return (
        <div>
            <p className='text-center text-green-500 text-lg font-semibold'>Available Appointments on <span className='text-white bg-gray-500 px-5 rounded-md'>{format(selectedDate, 'PP')}</span></p>

            <div className='gap-5 my-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions?.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        showModalHandle={showModalHandle}
                    ></AppointmentOption>)
                }
            </div>
            {showModal && <Modal
                appointmentOptions={appointmentOptions}
                setShowModal={setShowModal}
                activeId={activeId}
                selectedDate={selectedDate}
                refetch={refetch}
            ></Modal>
            }
        </div>
    );
};

export default AvailableAppointment;

