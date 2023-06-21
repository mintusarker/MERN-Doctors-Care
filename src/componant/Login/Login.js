import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");


    const handleGoogleSignIn = () => {

    }

    
    return (
        <div>
            <div className="h-[600px] flex justify-center items-center">
                <h2 className='text-3xl'>Login page</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type='email' name='name' className='input border border-gray-400 w-full'{...register("firstName")} />
                    <label className='label'><span className='label-text'>Password</span></label>
                    <input type='password' name='name' className='input border-gray-400 w-full'{...register("firstName")} />
                    <input type="email" name="" id="" />
                    <p>{data}</p>
                    <input className='btn btn-accent my-3 w-full max-w-xs' value='Login' type="submit" />
                    <p>New to Doctors Portal?  <Link to='/signup' className='text-secondary'>Create new account</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;