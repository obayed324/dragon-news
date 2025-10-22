import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../Provider/Authprovider';
const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const handleLogout = () => {
        console.log("Button click");
        logout()
            .then(() => {
                alert("You logged out successfully")
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email} </div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img className='className=" w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-md hover:scale-105 transition-transform duration-300"' src={user ? user.photoURL : userIcon} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> : <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
                }

            </div>

        </div>
    );
};

export default Navbar;