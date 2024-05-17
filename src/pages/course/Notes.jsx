import React from 'react'
import { useState } from 'react'


function Notes() {

    const [notes, setNotes] = useState([]);
    const [state, setState] = useState({
        title: "",
        note: "",
        id: Math.random() * 10,
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    const handleDelete = (id) => {
   const leftNotes = notes.filter((note,i)=> note.id !== id);
   setNotes(leftNotes)
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);

        setNotes([...notes, state]);
        setState({
            title:"",
            note:""
        })
    }

    return (
        <>

            <div className='text-center items-center pt-40 text-lg  '> Hey Learner's <br /> Wanna Note Something <span className='text-purple font-semibold'> IMPORTANT! </span>

                <div className='  section-container flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 pt-10 pb-2 border'>
                    <div className='w-[400px] mx-auto'>
                        <form onSubmit={handleSubmit}  action="" className='flex flex-col'>
                            <input required onChange={handleChange} value={state.title} type="text" placeholder='Add Title' name='title' className='border-2 bg-white  mb-3 bg-blue-100 p-2 black border-blue-300 rounded-full text-center' />
                            <textarea required onChange={handleChange} value={state.note} name="note" id="" cols="30" rows="10" placeholder='Write Something' className='border-2 bg-blue-100 black mb-3 p-2 border-blue-300 rounded-md text-center'></textarea>
                            <button className='btn btn-primary px-5 py-3 w-full text-white'>Add Note</button>
                        </form>
                        <div className="flex flex-wrap notes-container border-t-2 border-blue-300 m-10">
                            {
                               notes.length > 0 ? notes.map((note,i) => {
                                return (
                                    <div key={i} className="note  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mt-5 b w-[300px] p-4 py-10 relative">
                            <button className='delete-note absolute right-2 top-0 font-bold text-2xl text-black-500' onClick={() => handleDelete(note.id)}>X</button>
                            <h3 className='font-semibold text-1xl pb-2 '>{note.title}</h3>
                            <p>{note.note}</p>
                        </div>
                                )
                            }) : <p className=' py-5 flex text-center'> No Notes Yet</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notes
