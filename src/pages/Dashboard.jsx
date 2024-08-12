import React, { useState } from 'react';
import { MonthPick, PopularPick, FindersPick, FindersPick_user } from 'components';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mt-40px mb-[250px] w-[1400px]">
        <div className="flex ml-[30px]">
          <FontAwesomeIcon icon={faCircleCheck} color="orange" className="text-[45px] ml-[30px]" />
          <h1 className="text-32px font-bold mb-4 ml-10px ">이달의 Pick !</h1>
        </div>
        <div className="flex flex-row justify-around items-center w-full">
          <MonthPick />
          <MonthPick />
          <MonthPick />
          <MonthPick />
        </div>
      </div>

      <div className="flex flex-col mt-40px mb-[250px] w-[1400px]">
        <div className="flex ml-[30px]">
          <FontAwesomeIcon icon={faCircleCheck} color="orange" className="text-[45px] ml-[30px]" />
          <h1 className="text-32px font-bold mb-4 ml-10px ">Finder's Pick !</h1>
        </div>
        <div>
          {isLoggedIn ? (
            <div className="flex flex-row justify-around items-center w-full">
              <FindersPick_user />
              <FindersPick_user />
              <FindersPick_user />
              <FindersPick_user />
            </div>
          ) : (
            <div className="flex flex-row justify-around items-center w-full">
              <FindersPick />
              <FindersPick />
              <FindersPick />
              <FindersPick />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-40px mb-[250px] w-[1400px]">
        <div className="flex ml-[30px]">
          <FontAwesomeIcon icon={faCircleCheck} color="orange" className="text-[45px] ml-[30px]" />
          <h1 className="text-32px font-bold mb-4 ml-10px ">요즘 뜨는 맛집</h1>
        </div>
        <div className="flex flex-row justify-around items-center w-full">
          <PopularPick />
          <PopularPick />
          <PopularPick />
          <PopularPick />
        </div>
      </div>
    </div>
  );
}
