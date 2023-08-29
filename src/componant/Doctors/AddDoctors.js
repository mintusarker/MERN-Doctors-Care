import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties = [] } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`https://hello-doctors-server.vercel.app/specialty`);
            const data = res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}` // picture store imgbb
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const name = data.name;
                    const email = data.email;
                    const specialty = data.specialty;
                    const imageUrl = imgData.data.url;

                    const doctor = {
                        name,
                        email,
                        specialty,
                        imageUrl
                    }

                    fetch('https://hello-doctors-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`${name} added successfully`)
                                navigate('/dashboard/manage-doctors')
                            }
                        })
                }
            })
    }

    return (
        <div className="h-full flex flex-col">
            <h2 className='text-2xl capitalize p-4'>Add Doctors</h2>
            <div className='w-96 rounded-md pl-12'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <label className='label'><span className='label-text'>Name</span></label>
                    <input
                        type='text'
                        name='name'
                        className='input border border-gray-400 w-full'
                        {...register("name", { required: 'Name is required' })} />


                    <label className='label'><span className='label-text'>Email</span></label>
                    <input
                        type='email'
                        name='name'
                        className='input border border-gray-400 w-full'
                        {...register("email", { required: 'Email Address is required' })} />


                    <label className='label'><span
                        className='label-text'>Specialty</span></label>
                    <select {...register("specialty", { required: ('specialty is required') })}
                        className="select border border-gray-400 w-full">
                        <option disabled selected value="">Pic a one specialty</option>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>

                    <label className='label'><span
                        className='label-text'>Add Picture</span></label>
                    <input
                        type="file" name=""
                        className='input px-[60px] w-full border border-gray-400 rounded-none h-[130px] pt-[50px]'
                        {...register('image', { required: ('image is required') })} />

                    {errors.image && <p>{errors?.image?.message}</p>}

                    <input className='btn btn-neutral my-4 w-full' value='Add Doctor' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctors; 