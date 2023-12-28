import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Formulary } from '../components/Formulary'
import { PatientList } from '../components/PatientList'
import { Link } from 'react-router-dom'

import '../styles/work.css'

const Work = () => {

  const INITIAL = JSON.parse(localStorage.getItem('patients')) || [];
  const[patients, setPatients] = useState(INITIAL);
  const[patient, setPatient] = useState({});

  const getId = (id)=>{
     const patientsUpdate = patients.filter((patient)=>{
      return patient.id !== id;
    })

    setPatients(patientsUpdate);
  }

  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])


  return (
    <div className='work-page'>

      <Header />

      <Link to='/' className='back'>
        <button>
          <img src="img/back-arrow.png" alt="back" className='back-img'/>
        </button>
      </Link>

      <div className="lg:flex justify-around mt-5 ">
        <Formulary 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList 
          patients={patients}
          getId={getId}
          setPatient={setPatient}
        />
      </div>

    </div>
  )
}

export default Work
