import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold mb-3'>Login With</h1>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle></FaGoogle>Login with Google</button>
                <button className='btn'><FaGithub></FaGithub>Login With GitHub</button>
                
            </div>
        </div>
    );
};

export default SocialLogin;