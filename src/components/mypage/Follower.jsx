import React from 'react';
import { FollowerCard } from '..';

export default function Follower() {
  return (
    <div className="mt-[30px] ml-[15px]">
      <h1 className="text-[35px] font-bold">Follower</h1>
      <div className="w-[95%] h-[5px] bg-yellow-500 mt-[15px]"></div>
      <div className='flex justify-center'>
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
      </div>
      <div className="w-[95%] h-[5px] bg-yellow-500 mt-[15px] mb-[100px]"></div>
    </div>
  );
}
