export default function MyPagebar() {
  return (
    <div className="w-full h-[170px] bg-gray-200 m-0 p-0 box-border flex items-center">
      <h1 className="ml-[75px] text-[40px] font-bold flex-1 text-left">마이페이지</h1>
      <div className="flex-1 flex justify-center items-center mr-[75px] text-[30px] mr-[25%]">
        <div className="flex items-center space-x-[40px]">
          <h2 className="font-semibold">Follower</h2>
          <p>19</p>
        </div>
        <p className="mx-[100px] text-[40px]">|</p>
        <div className="flex items-center space-x-[40px]">
          <h2 className="font-semibold">Following</h2>
          <p>6</p>
        </div>
      </div>
    </div>
  );
}
