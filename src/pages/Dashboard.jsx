import React from 'react';
import { MonthPick, PopularPick, FindersPick } from 'components';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
  return (
    <div className="w-[90%] m-[3%]">
      <div className="flex flex-col mt-40px mb-[250px]">
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

      <div className="flex flex-col mt-40px mb-[250px]">
        <div className="flex ml-[30px]">
          <FontAwesomeIcon icon={faCircleCheck} color="orange" className="text-[45px] ml-[30px]" />
          <h1 className="text-32px font-bold mb-4 ml-10px ">Finder's Pick !</h1>
        </div>
        <div className="flex flex-row justify-around items-center w-full">
          <FindersPick />
          <FindersPick />
          <FindersPick />
          <FindersPick />
        </div>
      </div>

      <div className="flex flex-col mt-40px mb-[250px]">
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
