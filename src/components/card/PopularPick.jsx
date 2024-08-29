import { Img } from 'react-image';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

export default function PopularPick() {
  const navigate = useNavigate();

  const goToBoard = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center">
      <div
        className="w-270 h-450 bg-white border border-gray-300 m-10px rounded-[10px] transform transition-transform duration-300 hover:scale-110"
        style={{ boxShadow: '10px 10px 0px rgba(220, 220, 220, 1)' }}>
        <h3 className="text-20px font-bold m-6">대구 삼덕동 OOO</h3>
        <div className="flex justify-center">
          <Img
            src={
              'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187458549420.jpg?gif=1&w=480'
            }
            className="w-220 h-200 border border-gray-300"></Img>
        </div>
        <Link to={goToBoard} className="hover:underline">
          <div className="flex ml-[25px] mt-40px text-18px">
            <FontAwesomeIcon icon={faClipboard} className="text-[1.5rem]" />
            <div className="flex mt-[3px]">
              <p className="font-bold ml-10px mr-[5px]">관련 게시글</p>
              <p className="mr-[5px]">:</p>
              <p>244개</p>
            </div>
          </div>
        </Link>
        <div className="flex ml-[25px] mt-20px text-18px">
          <FontAwesomeIcon icon={faThumbsUp} className="text-[1.5rem]" />
          <div className="flex mt-[3px]">
            <p className="font-bold ml-10px mr-[5px]">좋아요</p>
            <p className="mr-[5px]">:</p>
            <p>4524개</p>
          </div>
        </div>
      </div>
    </div>
  );
}