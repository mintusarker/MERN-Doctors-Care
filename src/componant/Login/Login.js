import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

    const handleLogin = (data) => {
        console.log(data);
    }


    const handleGoogleSignIn = () => {

    }


    return (
        <div className="h-[600px] flex flex-col justify-center items-center">
            <div className='w-96 shadow-lg shadow-slate-600 rounded-md p-7'>
                <h2 className='text-3xl capitalize mb-5 text-center'>Login page</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type='email' name='name' className='input border border-gray-400 w-full'{...register("email", { required: 'Email Address is required' })} />
                   
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    <label className='label'><span
                        className='label-text'>Password</span></label>
                    <input type='password' name='password' className='input border-gray-400 w-full mb-4'{...register("password", {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })} />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <input className='btn btn-accent my-3 w-full' value='Login' type="submit" />
                    <p className='font-semibold text-center'>New to here ?<Link to='/signup' className='text-secondary border-b-2 ml-6 border-green-500'>Create new account</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;