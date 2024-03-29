import React from 'react'
import EventData from '../../data/pageData/EventData';
import EventContent from './blocks/EventContent';
import UserCard from './blocks/UserCard';
import UserCardData from '../../data/pageData/UserCardData';



function Events() {
    const data = EventData[0];
    const user = UserCardData[0];
    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='container mx-auto flex flex-col sm:flex-row py-4 gap-2'>

                <div className="flex flex-col sm:w-[25%]">
                    <UserCard data={user} />
                </div>
                
                <div className='sm:w-[75%] '>
                    <EventContent data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Events