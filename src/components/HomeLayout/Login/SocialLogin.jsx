import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle  size={24}/>Login with Google</button>
                <button className='btn w-full btn-outline btn-primary btn-primary'><FaGithub size={24}/>Login with GitHub</button>
            </div>

        </div>
    );
};

export default SocialLogin;