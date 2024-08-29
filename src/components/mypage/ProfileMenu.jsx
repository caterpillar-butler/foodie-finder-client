import React from 'react';
import profileImage from '../../img/foodiefinder_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

export default function ProfileMenu() {
  return (
    <div className="border-black border-r w-[400px] h-auto flex flex-col items-center">
      <div className="flex justify-center">
        <Img className="w-[230px] mt-[70px]" src={profileImage} alt="Profile" />
      </div>
      <div className="mt-[40px] text-center">
        <h3 className="text-[25px] font-semibold">홍재성</h3>
        <p className="text-[20px] mt-[5px]">일반회원</p>
        <p className="text-[20px] mt-[12px]">demo@email.com</p>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-start mb-[35px]">
          <FontAwesomeIcon icon={faPenToSquare} className="text-[2.7rem]" />
          <Link className="text-[30px] ml-[20px]">개인정보수정</Link>
        </div>
        <div className="flex items-center justify-start mb-[35px]">
          <FontAwesomeIcon icon={faPenToSquare} className="text-[2.7rem]" />
          <Link className="text-[30px] ml-[20px]">게시글 및 댓글 관리</Link>
        </div>
        <div className="flex items-center justify-start mb-[35px]">
          <FontAwesomeIcon icon={faComments} className="text-[2.7rem]" />
          <Link className="text-[30px] ml-[20px]">문의 관리</Link>
        </div>
      </div>
    </div>
  );
}
