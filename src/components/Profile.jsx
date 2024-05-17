import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Authprovider'

const Profile = ({ user }) => {
    const { logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut().then(() => {
    alert("logout Successfull")
        }).catch((error) => {

        })
    }



    return (
        <div>
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn bg-ghost btn-circle avatar ">   <div className="w-11 rounded-full">
                        {
                            user.photoURL ? <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} /> : <img
                                alt='Tailwind CSS navbar component'
                                src='https://media.licdn.com/dms/image/D5603AQG_mg-dckzWmg/profile-displayphoto-shrink_100_100/0/1715540118019?e=1721260800&v=beta&t=jx2BxN3MJ4BsqqIZPyGfbwnTwokOL_nc3TskEr4ePFw'
                            />
                        }
                    </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a href='/update-profile'>Profile</a></li>
                        <li><a>My Notes</a></li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile