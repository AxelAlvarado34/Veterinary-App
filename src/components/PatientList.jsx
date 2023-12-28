import React from 'react'
import { Patient } from './Patient'

export const PatientList = ({patients, getId, setPatient}) => {
    return (
        <div className='text-center mt-10 lg:w-2/5'>
            <h2 className='text-3xl font-black'>Manage Your Patients</h2>
            <p className='font-bold'>
                Edit, Delete, and {''} 
                <span className='text-indigo-600'>Manage</span>
            </p>

            <div className='patient p-5 md:overflow-y-scroll h-screen'>
                {
                    patients.map((patientState)=>{
                        return <Patient patientState={patientState} key={patientState.id} getId={getId} setPatient={setPatient}/>
                    })
                }
                
                
            </div>

        </div>
      )
}
