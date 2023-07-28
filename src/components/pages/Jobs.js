import React from 'react'
import PendingData from '../../data/pageData/PendingData';
import UserCard from './blocks/UserCard';
import Pending from './blocks/Pending';
import Search from './blocks/Search';
import UserCardData from '../../data/pageData/UserCardData';
import JobContent from './blocks/JobContent';
import JobsData from '../../data/pageData/JobsData';

function Jobs() {
    const user = UserCardData[0];
    const pending = PendingData[0];
    const jobSections = JobsData;


    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='container mx-auto flex flex-col sm:flex-row py-4 gap-2'>


                <div className="flex flex-col sm:w-[25%] gap-2">
                    <Search />
                    <UserCard data={user} />
                </div>

                <div className='sm:w-[50%] space-y-2'>
                    {jobSections.map((section, index) => (
                        <JobContent key={index} data={section} />
                    ))}
                </div>

                <div className='sm:w-[25%]'>
                    <Pending data={pending} />
                </div>


            </div>
        </div>
    )
}

export default Jobs