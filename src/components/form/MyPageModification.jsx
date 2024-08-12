import React from 'react';
import finderImg from '../../img/finderImg.png';
import inquiryIcon from '../../img/inquiryIcon.png';
import modificationIcon from '../../img/modificationIcon.png';

const MyPageModification = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full">
        {/* Top - 분리예정 */}
        <div className="bg-gray-200 flex items-center mb-6 h-36">
          <div className="font-bold text-3xl w-1/3 text-center">마이페이지</div>
          <div className="flex pt-3 w-2/3">
            <div className="w-1/2 text-right">
              <span className="font-semibold text-xl mr-5px">Follower</span>
              <span className="ml-2 text-xl">19</span>
            </div>
            <div className="pt-3 ml-9 mr-9">|</div>
            <div className="w-1/2 text-left">
              <span className="font-semibold text-xl mr-5px">Following</span>
              <span className="ml-2 text-xl">6</span>
            </div>
          </div>
        </div>
        {/* Left Side */}
        <div className="flex">
          <div className="w-1/4 p-8 flex flex-col items-center border-r border-gray-400">
            <div className="w-36 h-36 flex items-center justify-center">
              <img src={finderImg} alt="Profile" className="rounded-full" />
            </div>
            <h2 className="text-xl font-bold mt-4">홍재성</h2>
            <p className="text-sm text-gray-700 mt-1">일반 회원</p>
            <p className="text-gray-800 mb-8">demo@test.com</p>
            <div className="justify-center item-center mt-8">
              <div className="w-full text-lg">
                <div className="flex items-center mb-6 hover:text-yellow-500 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center mr-2">
                    <img src={modificationIcon} alt="Profile" className="rounded-full" />
                  </div>
                  <span className="text-gray-800">개인정보수정</span>
                </div>
                <div className="flex items-center mb-6 hover:text-yellow-500 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center mr-2">
                    <img src={modificationIcon} alt="Profile" className="rounded-full" />
                  </div>
                  <span className="text-gray-800">게시글 및 댓글 관리</span>
                </div>
                <div className="flex items-center hover:text-yellow-500 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center mr-2">
                    <img src={inquiryIcon} alt="Profile" className="rounded-full" />
                  </div>
                  <span className="text-gray-800">문의 관리</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-3/4 py-10 px-16">
            <h3 className="text-2xl font-bold mb-6">개인정보수정</h3>
            <div className="border-t-4 border-b-4 py-24 px-56 border-yellow-500 text-center ">
              <div className="mb-7 flex h-11 ">
                <label className="block mb-2 w-1/5 mr-5 leading-[2.5rem]">아이디</label>
                <input
                  type="text"
                  placeholder="변경하실 아이디를 입력해주세요."
                  className="w-full px-2 border border-gray-300 rounded w-4/5 text-sm placeholder-gray-500"
                />
              </div>
              <div className="mb-5 flex">
                <label className="block mb-2 w-1/5 mr-5 leading-[2.5rem]">비밀번호</label>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="변경하실 비밀번호를 입력해주세요."
                    className="w-full px-2 border border-gray-300 rounded text-sm h-11 placeholder-gray-500"
                  />
                  <p className="text-xs text-gray-400 ml-1 text-left ">8자리 이상 / 영어, 숫자가 포함되어야합니다.</p>
                </div>
              </div>
              <div className="mb-7 flex h-11">
                <label className="block mb-2 w-1/5 mr-5 ">비밀번호 확인</label>
                <input
                  type="password"
                  placeholder=""
                  className="w-full px-2 border border-gray-300 rounded w-4/5"
                />
              </div>
              <div className="flex h-11">
                <label className="block mb-2 w-1/5 mr-5 leading-[2.5rem]">전화번호</label>
                <input
                  type="text"
                  placeholder="010-0000-0000"
                  className="w-full px-2 border border-gray-300 rounded w-4/5 text-sm placeholder-gray-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-black py-5 px-9 rounded my-16">정보수정</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageModification;
