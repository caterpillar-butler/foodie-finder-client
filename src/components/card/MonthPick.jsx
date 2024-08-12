import { Img } from 'react-image';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MonthPick() {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate('/');
  };
  return (
    <div className="flex justify-center">
      <div
        className="w-270 h-450 bg-white border border-gray-300 m-10px rounded-[10px] transform transition-transform duration-300 hover:scale-110"
        style={{ boxShadow: '10px 10px 0px rgba(220, 220, 220, 1)' }}>
        <div className="flex justify-center mt-[35px]">
          <Img
            src={
              'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187458549420.jpg?gif=1&w=480'
            }
            className="w-220 h-200 border border-gray-300"></Img>
        </div>
        <Link to={goToPage}>
          <p className="font-semibold text-[17px] m-4 mt-4 underline">삼덕동 술집 아지트처럼 아늑한 '철부지' 추천</p>
        </Link>
        <div className="m-[40px] mt-[20px] flex flex-col text-[17px]">
          <Link className="mb-10px hover:underline"># 삼덕동</Link>
          <Link className="mb-10px hover:underline"># 대구술집</Link>
          <Link className="hover:underline"># 분위기맛집</Link>
        </div>
      </div>
    </div>
  );
}
