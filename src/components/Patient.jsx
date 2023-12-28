import React from 'react'

export const Patient = ({ patientState, getId, setPatient }) => {

    const { pet, owner, email, date, symptoms, id } = patientState;

    return (
        <div className='bg-white text-left p-10 mt-10 rounded-md shadow-md'>
            <p className='text-gray-800 uppercase font-bold mb-3'>
                Pet : {''}
                <span className='font-normal normal-case'>{pet}</span>
            </p>

            <p className='text-gray-800 uppercase font-bold mb-3'>
                Onwer : {''}
                <span className='font-normal normal-case'>{owner}</span>
            </p>

            <p className='text-gray-800 uppercase font-bold mb-3'>
                Email : {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='text-gray-800 uppercase font-bold mb-3'>
                Date : {''}
                <span className='font-normal normal-case'>{date}</span>
            </p>


            <p className='text-gray-800 uppercase font-bold mb-3'>
                Symptoms : {''}
                <span className='font-normal normal-case'>{symptoms}</span>
            </p>

            <div className='md:flex gap-5 mt-5'>
                <button 
                    className='p-5 bg-blue-600 hover:bg-blue-800 transition-all w-full mb-4 md:w-1/2 rounded-md text-center uppercase text-white font-black text-xl'
                
                    onClick={()=>{
                        setPatient(patientState);
                    }}
                >
                    Edit
                </button>

                <button
                    className='p-5 bg-red-600 hover:bg-red-800 transition-all w-full md:w-1/2 mb-4 rounded-md text-center uppercase text-white font-black text-xl'

                    onClick={()=>{
                        getId(id)
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
