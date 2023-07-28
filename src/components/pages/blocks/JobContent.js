import React from 'react';

function JobContent({ data }) {
  return (
    <div className='flex flex-col bg-white border rounded-lg p-4 mx-4 sm:mx-0 space-y-2'>
      <h1 className='font-bold text-[15px] uppercase '>{data.Head}</h1>
      <p className='text-slate-500 text-[12px]'>{data.Desc}</p>

      <div className='flex flex-col text-[12px] space-y-2'>
        {data.data.map((item, index) => (
          <div key={index} className='flex flex-col bg-white border border-slate-200 p-4 mb-2 rounded-lg'>
            <div className='flex flex-col'>
              <h1 className='flex font-bold'>{item.Title}</h1>

              <div className='flex justify-between'>
                <p>Company</p>
                <p className='font-bold'>{item.Company}</p>
              </div>

              <div className='flex justify-between'>
                <p>Location</p>
                <p className='font-bold'>{item.Location}</p>
              </div>

              <div className='flex justify-between'>
                <p>Years of Exp</p>
                <p className='font-bold'>{item.Years}</p>
              </div>

              <div className='flex justify-between'>
                <p>Salary</p>
                <p className='font-bold'>{item.Salary}</p>
              </div>

              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <p>Slots</p>
                  <p className='font-bold'>{item.Slots}</p>
                </div>
                <p className='flex justify-end text-[#0098FF]'>View Details</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobContent;
