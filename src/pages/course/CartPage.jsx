import React from 'react'

const CartPage = () => {
    return (
        <div className='section-container'>
            <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% '>
                <div className='py-36 bg-white w-full flex flex-col  justify-center items-center gap-8'>
                    <div className='  space-y-7 px-4'>
                        <h2 className='md:text-4xl text-4xl font-bold md:leading-snug leading-snug '>Let's Learn <span className='text-purple'> Design & Develop </span></h2>

                    </div>


                </div>
            </div>

            {/* table container */}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-purple border-none text-white rounded-md'>
      <tr>
       <th>#</th>
        <th>Course</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       <td>1</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
    </tbody>

    
  </table>
</div>
            </div>
        </div>
    )
}

export default CartPage
