import React from 'react'

import PendingData from '../../data/pageData/PendingData';
import Pending from './blocks/Pending';

import UserCard from './blocks/UserCard';
import UserCardData from '../../data/pageData/UserCardData';

import NotifContent from './blocks/NotifContent';
import NotifData from '../../data/pageData/NotifData';


function Notif() {
    const user = UserCardData[0];
    const pending = PendingData[0];
    const notif = NotifData[0];
    console.log("data",notif);


    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='container mx-auto flex flex-col sm:flex-row py-4 gap-2'>

                <div className="sm:w-[25%] gap-2">
                    <UserCard data={user} />
                </div>

                <div className='sm:w-[50%] space-y-2'>
                    <NotifContent data={notif}/>
                </div>

                <div className='sm:w-[25%]'>
                    <Pending data={pending} />
                </div>

            </div>
        </div>
    )
}

export default Notif