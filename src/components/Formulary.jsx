import React, { useEffect, useState } from 'react'
import { Alert } from './Alert';
import { keyGenerator } from '../../helpers';

export const Formulary = ({patients, setPatients, patient, setPatient}) => {

    const[pet, setPet] = useState('');
    const[owner, setOwner] = useState('');
    const[email, setEmail] = useState('');
    const[date, setDate] = useState('');
    const[symptoms, setSymptoms] = useState('');

    const[alert, setAlert] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if ([pet, owner, email, date, symptoms].includes('')) {
            setAlert(true);
            return;
        }

        setAlert(false);

        const petObject = {
            pet,
            owner,
            email,
            date,
            symptoms
        }

        if (patient.id) {
            petObject.id = patient.id;
            const patientsUpdate = patients.map((patientState)=>{
                return patientState.id === patient.id  ? petObject : patientState; 
            })

            setPatients(patientsUpdate);
            setPatient({});

        }else{
            petObject.id = keyGenerator();
            setPatients([...patients, petObject]);
        }
           

        setPet('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

    }

    useEffect(()=>{
        if (Object.keys(patient).length > 0) {
            setPet(patient.pet);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSymptoms(patient.symptoms);
        }
    },[patient])


    return (
        <div className='text-center mt-10 lg:w-2/5 px-5'>
            
            <h2 className='text-3xl font-black'>Register Your Patients</h2>
            <p className='font-bold'>
            Add Your Patients and {''} 
                <span className='text-indigo-600'>Manage</span>
            </p>
            
            <form className='text-left bg-white py-10 px-5 rounded-lg shadow-2xl mt-10 mb-16' onSubmit={handleSubmit}>

            {
                alert ? <Alert/> : null 
            }

            <div className='mb-3'>
                    <label className='block mb-3 text-gray-700 uppercase font-bold' htmlFor="pet">Pet : </label>
                    <input 
                        className='border w-full p-2 rounded-md'
                        placeholder="The pet's name..."
                        id='pet'
                        type="text" 

                        value={pet}
                        onChange={(e)=>{
                            setPet(e.target.value)
                        }}
                    />
                </div>
    
                <div className='mb-3'>
                    <label className='block mb-3 text-gray-700 uppercase font-bold' htmlFor="owner">owner : </label>
                    <input 
                        className='border w-full p-2 rounded-md'
                        placeholder="Owner's Name..."
                        id='owner'
                        type="text" 

                        value={owner}
                        onChange={(e)=>{
                            setOwner(e.target.value)
                        }}
                    />
                </div>
    
                <div className='mb-3'>
                    <label className='block mb-3 text-gray-700 uppercase font-bold' htmlFor="email">Email : </label>
                    <input 
                        className='border w-full p-2 rounded-md'
                        placeholder='Email...'
                        id='email'
                        type="email" 
                    
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                </div>
    
                <div className='mb-3'>
                    <label className='block mb-3 text-gray-700 uppercase font-bold' htmlFor="date">Date : </label>
                    <input 
                        className='border w-full p-2 rounded-md'
                        id='date'
                        type="date" 

                        value={date}
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}
                    />
                </div>
    
                <div className='mb-3'>
                    <label className='block mb-3 text-gray-700 uppercase font-bold' htmlFor="symptoms">symptoms : </label>
                    <textarea 
                        className='border w-full p-2 rounded-md resize-none'
                        placeholder='Symptoms of the Pet..'
                        id='symptoms'
                        type="text" 
                        rows={5}
                    
                        value={symptoms}
                        onChange={(e)=>{
                            setSymptoms(e.target.value)
                        }}
                    />
                </div>
    
                <input 
                    type="submit"
                    value={
                        patient.id ? 'Edit' : 'Register'
                    }
                    className='w-full p-3 bg-indigo-600 rounded-md shadow-md uppercase text-white font-black cursor-pointer hover:bg-indigo-800 transition-all'
                />
            </form>
        </div>
      )
}
