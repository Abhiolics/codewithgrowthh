import React, { useEffect, useState } from 'react'

const Api  = () => {


    const [users, setUsers] = useState([]);

        const getUsers = async () => {
            const response =  await fetch("https://api.github.com/users");
            setUsers(await response.json());
            

        }
    

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <>
    <div className='section-container pt-40 gap-8 flex flex-col sm:flex-col md:flex-cols-2 lg:flex-col-3'>
     <h1 className='text-3xl font-semibold text-center text-purple'>Github Users</h1>


     {
        users.map((curElem) => {     
    return (
    <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">{curElem.node_id}</div>
    <div className="stat-value text-primary">{curElem.login}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Articles</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">{}</div>
    <div className="stat-title">287</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>

)
        })
    }
    </div>
    </>
  )
}

export default Api
