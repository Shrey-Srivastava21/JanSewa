import React from 'react'
import NavBar from '@/components/NavBar';
import JobsCard from '@/components/JobsCard';
import NgosCard from '@/components/NgoCard';

const NGOs = () => {
  return (
    <>
      <NavBar/>
      <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available NGO<span className="lowercase">s</span></h1>
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    <NgosCard/>
                    <NgosCard/>
                    <NgosCard/>
                    <NgosCard/>
                </div>
            </div>
    </>
  )
}

export default NGOs