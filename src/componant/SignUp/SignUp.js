import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

    const handleSignUp = (data) => {
        console.log(data);
    }


    const handleGoogleSignIn = () => {

    }


    return (
        <div className="h-full flex flex-col justify-center items-center mt-10">
            <div className='w-96 shadow-lg shadow-slate-600 rounded-md p-7'>
                <h2 className='text-3xl capitalize text-center -mt-2 mb-3'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <label className='label'><span className='label-text'>Name</span></label>
                    <input type='text' name='name' className='input border border-gray-400 w-full'{...register("name", { required: 'Name is required' })} />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type='email' name='name' className='input border border-gray-400 w-full'{...register("email", { required: 'Email Address is required' })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    <label className='label'><span
                        className='label-text'>Password</span></label>
                    <input type='password' name='password' className='input border-gray-400 w-full'{...register("password", {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <input className='btn btn-accent my-4 w-full' value='Sign up' type="submit" />
                    <p className='font-semibold text-center'>Already have an account!<Link to='/login' className='text-secondary border-b-2 ml-6 border-green-500'>Please Login</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;