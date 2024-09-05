import React from 'react';
import { Img } from 'react-image';

export default function FollowerCard() {
  return (
    <div className="w-[220px] h-[300px] border-2 border-yellow-500 mt-[200px] mb-[200px] mr-[150px] rounded-xl">
      <div className="w-[80px] h-[80px] justify-center">
        <Img className="w-[80px] h-[80px]" src="/img/foodiefinder_profile.png" alt="Profile" />
      </div>
      <div className="mt-[40px] text-center">
        <h3 className="text-[23px] font-semibold">홍재성</h3>
        <p className="text-[20px] mt-[5px]">일반회원</p>
        <p className="text-[20px] mt-[12px]">demo@email.com</p>
      </div>
    </div>
  );
}
