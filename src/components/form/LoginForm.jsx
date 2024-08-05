import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm({ login }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    login(name, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-2">
      <div className="w-500 max-w-2xl mx-4 bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">로그인 LOGIN</h2>
        <div className="border-b-2 border-yellow-500 mb-4"></div>
        <form onSubmit={handleSubmit}>
          <div className="ml-4 mt-9 mb-4 flex items-center">
            <label className="text-gray-700 mr-9">아이디</label>
            <input
              type="text"
              name="name"
              placeholder="아이디를 입력해주세요."
              className="w-320 px-3 py-2 border border-gray-300"
            />
          </div>
          <div className="ml-4 mt-9 mb-9 flex items-center">
            <label className="text-gray-700 mr-6">비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-320 px-3 py-2 border border-gray-300"
            />
          </div>
          <div className="border-b-2 border-yellow-500 mb-4"></div>
          <div>
            <Link to="/" className="mr-5">
              아이디 찾기
            </Link>
            <label>|</label>
            <Link to="/" className="ml-5">
              비밀번호 찾기
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-9 w-full max-w-xs h-60 bg-yellow-500 text-white rounded justify-center items-center">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}