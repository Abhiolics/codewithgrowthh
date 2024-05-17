import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/Authprovider'
import { useLocation, useNavigate } from 'react-router-dom'

const Updateprofile = () => {
    const {updateuserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || "/";

      
      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        updateuserProfile(name, photoURL).then(() => {
            // alert("Profile updated successfully")
            navigate(from, {replace: true})
           
          }).catch((error) => {
          });
      }


  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl  bg-white">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className='font-bold'>Update Your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Enter your name" className="input input-bordered  bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Upload Photo</span>
          </label>

          <input type="text" {...register("photoURL")} placeholder="Paste photoURL" className="input input-bordered  bg-white" required />
          
          {/* TODO: Uplodaing image will be later */}
          {/* <input type="file" className="file-input w-full max-w-xs" /> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-purple border-none text-white">Update</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Updateprofile